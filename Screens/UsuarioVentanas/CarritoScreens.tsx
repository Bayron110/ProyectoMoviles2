import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/Config';

export default function CarritoScreens({ navigation }: any) {
    const [productos, setProductos] = useState<any[]>([]);
    const [bloqueado, setBloqueado] = useState(false);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
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

    const eliminarProducto = async (id: number) => {
        if (bloqueado) return;

        const { error } = await supabase.from('Respuestos').delete().eq('id', id);
        if (error) {
            Alert.alert("Error", "No se pudo cancelar la compra.");
        } else {
            Alert.alert("Cancelado", "Producto eliminado del carrito.");
            obtenerDatos();
        }
    };

    const calcularTotal = () => {
        return productos.reduce((acc, item) => acc + parseFloat(item.Total || 0), 0);
    };

    const finalizarCompra = () => {
        const total = calcularTotal();
        Alert.alert("Compra finalizada", 'Total a pagar: ' + total.toFixed(2));
        setBloqueado(true); 
    };

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
                                title="Cancelar compra"
                                onPress={() => eliminarProducto(item.id)}
                                color="#C0392B"
                                disabled={bloqueado}
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