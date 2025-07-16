import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/Config';

export default function CarritoScreens({ navigation }: any) {
    const [productos, setProductos] = useState<any[]>([]);
    const [bloqueado, setBloqueado] = useState(false);

    useEffect(() => {
        obtenerDatos();
    const canal = supabase
        .channel('repuestos-realtime')
        .on(
            'postgres_changes',
            {
                event: '*', 
                schema: 'public',
                table: 'Respuestos'
            },
            (payload) => {
                //console.log('Cambio detectado:', payload);
                obtenerDatos();  
            }
        )
        .subscribe();

    return () => {
        supabase.removeChannel(canal); 
    };
}, []);


    async function obtenerDatos(){
        const { data, error } = await supabase.from('Respuestos').select('*');
        if (error) {
            console.log("Error al obtener datos:", error.message);
        } else {
            setProductos(data);
            if (data.length > 0) {
                setBloqueado(false); 
            }
        }
    };

    async function eliminarProducto(id: number){
        if (bloqueado) return;

        const { error } = await supabase.from('Respuestos').delete().eq('id', id);
        if (error) {
            Alert.alert("Error", "No se pudo cancelar la compra.");
        } else {
            Alert.alert("Cancelado", "Producto eliminado del carrito.");
            obtenerDatos();
        }
    };
    function Activar () {
    return productos.every(p => p.Estado === "Completado");
};

    function calcularTotal(){
        return productos.reduce((acc, item) => acc + parseFloat(item.Total || 0), 0);
    };

    async function finalizarCompra() {
    if (!Activar()) {
        Alert.alert("Advertencia", "Todos los productos deben estar completados para finalizar la compra.");
        return;
    }

    const historialData = productos.map((item) => ({
        id: item.id,
        Marca: item.Marca,
        Cantidad: item.Cantidad,
        Total: item.Total,
        Estado: item.Estado,
        Fecha: new Date().toISOString(),
    }));

    const { error: insertError } = await supabase
        .from('Historial')
        .insert(historialData);

    if (insertError) {
        console.log("Error insertando en historial:", insertError);
        Alert.alert("Error", "No se pudo registrar el historial.");
        return;
    }

    const ids = productos.map(p => p.id);
    const { error: deleteError } = await supabase
        .from('Respuestos')
        .delete()
        .in('id', ids);

    if (deleteError) {
        console.log("Error eliminando del carrito:", deleteError);
        Alert.alert("Error", "No se pudo eliminar del carrito.");
        return;
    }

    const total = calcularTotal();
    Alert.alert("Compra finalizada", `Total pagado: $${total.toFixed(2)}`);
    setBloqueado(true);
    obtenerDatos();
}



async function historial(id: number) {
    const { data, error: fetchError } = await supabase
        .from('Respuestos')
        .select('*')
        .eq('id', id)
        .single();

    if (fetchError || !data) {
        Alert.alert("Error", "No se pudo obtener el producto para pagar.");
        return;
    }
    const { error: insertError } = await supabase
        .from('Historial')
        .insert([{
            ...data,
            Fecha: new Date().toISOString(), 
        }]);

    if (insertError) {
        Alert.alert("Error", "No se pudo registrar el historial.");
        return;
    }
    const { error: deleteError } = await supabase
        .from('Respuestos')
        .delete()
        .eq('id', id);

    if (deleteError) {
        Alert.alert("Error", "No se pudo eliminar del carrito.");
    } else {
        Alert.alert("Compra registrada", "Se ha movido al historial exitosamente.");
        obtenerDatos();
    }
}

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>🛒 Carrito de Compras</Text>

            {productos.length === 0 ? (
                <Text style={styles.empty}>No hay productos agregados aún.</Text>
            ) : (
                productos.map((item: any, index: number) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.name}>🧾 Producto: {item.id}</Text>
                        <Text style={styles.text}>Marca: {item.Marca}</Text>
                        <Text style={styles.text}>Cantidad: {item.Cantidad}</Text>
                        <Text style={styles.text}>Total: ${parseFloat(item.Total).toFixed(2)}</Text>
                        <Text style={styles.estado}>Estado: {item.Estado || "Pendiente"}</Text>

                        <View style={styles.cancel}>
                            <Button
                                title="Pagar Ahora"
                                onPress={() => historial(item.id)}
                                color="#2ccc0f"
                                disabled={bloqueado || item.Estado != "Completado"}
                            />
                            <Button
                                title="Cancelar compra"
                                onPress={() => eliminarProducto(item.id)}
                                color="#C0392B"
                                disabled={bloqueado || item.Estado !="Pendiente"}
                            />
                        </View>
                    </View>
                ))
            )}
            {productos.length > 0 && (
                <View style={styles.resumen}>
                    <Text style={styles.totalText}>Total a pagar: ${calcularTotal().toFixed(2)}</Text>
                    <Button
                        title="Finalizar compra"
                        onPress={finalizarCompra}
                        color="#27AE60"
                        disabled={!Activar() || bloqueado}
                    />
                </View>
            )}

            <View style={styles.buttonContainer}>
                <Button
                    title="Seguir comprando"
                    onPress={() => navigation.navigate('VentanaP')}
                    color="#2980B9"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff' },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF6600',
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fdfdfd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FF6600',
        marginBottom: 6,
    },
    text: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },
    estado: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#D35400',
        marginTop: 4,
        textTransform: 'uppercase',
    },
    cancel: {
        marginTop: 10,
    },
    resumen: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        marginBottom: 25,
        elevation: 1,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#27AE60',
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 40,
        alignSelf: 'center',
        width: '60%',
    },
    empty: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginTop: 40,
        fontStyle: 'italic',
    },
});