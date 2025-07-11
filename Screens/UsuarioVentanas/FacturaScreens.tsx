import {StyleSheet, Text, View, Image, TextInput, Button, ScrollView, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../../supabase/Config';

export default function FacturaScreens({ route, navigation }: any) {
    const { item } = route.params;
    const [idPersonalizado, setIdPersonalizado] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const subtotal = item.precio * (parseInt(cantidad) || 0);
    const total = subtotal;

    const confirmarCompra = () => {
        if (!idPersonalizado || !cantidad || parseInt(cantidad) <= 0) {
            Alert.alert("Error", "Completa el ID y la cantidad válida.");
            return;
        }
        setModalVisible(true);
    };

    const pagarAhora = async () => {
        const { error } = await supabase.from('Respuestos').insert([
            {
                id: parseInt(idPersonalizado),
                Marca: item.marca,
                Cantidad: parseInt(cantidad),
                Total: total,
                Estado: "Pendiente"
            }
        ]);

        if (error) {
            console.log("Error al guardar:", error.message);
            Alert.alert("Error", "No se pudo guardar en la base de datos.");
        } else {
            Alert.alert("Éxito", "Compra registrada correctamente.");
            setModalVisible(false);
            navigation.navigate('Carrito');
        }
    };

    const guardarCarrito = async () => {
        if (!idPersonalizado || !cantidad || parseInt(cantidad) <= 0) {
            Alert.alert("Error", "Completa el ID y la cantidad válida.");
            return;
        }

        const { error } = await supabase.from('Respuestos').insert([
            {
                id: parseInt(idPersonalizado),
                Marca: item.marca,
                Cantidad: parseInt(cantidad),
                Total: total,
                Estado: "Pendiente"
            }
        ]);

        if (error) {
            console.log("Error al guardar:", error.message);
            Alert.alert("Error", "No se pudo guardar en la base de datos.");
        } else {
            Alert.alert("Éxito", "Producto guardado en el carrito.");
            navigation.navigate('Carrito');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.text}>Marca: {item.marca}</Text>
            <Text style={styles.text}>Precio unitario: ${item.precio.toFixed(2)}</Text>
            <Text style={styles.text}>Stock disponible: {item.stock}</Text>

            <Text style={styles.label}>ID personalizado</Text>
            <TextInput
                placeholder="Ej: 101"
                value={idPersonalizado}
                onChangeText={setIdPersonalizado}
                style={styles.input}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Cantidad deseada</Text>
            <TextInput
                placeholder="Ej: 2"
                value={cantidad}
                onChangeText={setCantidad}
                keyboardType="numeric"
                style={styles.input}
            />

            <View style={styles.buttonGroup}>
                <Button title="Guardar en el carrito" onPress={guardarCarrito} color="#2980B9" />
                <View style={{ marginTop: 10 }}>
                    <Button title="Pagar ahora" onPress={confirmarCompra} color="#27AE60" />
                </View>
            </View>

            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Resumen de compra</Text>
                        <Text>Producto: {item.nombre}</Text>
                        <Text>ID: {idPersonalizado}</Text>
                        <Text>Marca: {item.marca}</Text>
                        <Text>Cantidad: {cantidad}</Text>
                        <Text>Estado: Pendiente</Text>
                        <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
                        <Text>Total: ${total.toFixed(2)}</Text>

                        <View style={{ marginTop: 20 }}>
                            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#A93226" />
                            <View style={{ marginTop: 10 }}>
                                <Button title="Pagar" onPress={pagarAhora} color="#27AE60" />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff' },
    image: { height: 200, borderRadius: 10, marginBottom: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#FF6600' },
    text: { fontSize: 16, marginBottom: 5, color: '#333' },
    label: { fontSize: 16, marginTop: 15, marginBottom: 5, fontWeight: 'bold', color: '#444' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 20, color: '#333' },
    buttonGroup: { marginTop: 10 },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        width: '80%'
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#27AE60',
        textAlign: 'center'
    }
});