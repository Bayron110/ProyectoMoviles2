import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabase/Config';

export default function HistorialCompra() {
    const [historial, setHistorial] = useState<Historial[]>([]);


    useEffect(() => {
        cargarHistorial();
    }, []);

    async function cargarHistorial() {
        const { data, error } = await supabase.from('Historial').select('*');
        if (!error) setHistorial(data);
    }

  interface Historial {
  id: number;
  Marca: string;
  Cantidad: string;
  Total: string;
  Estado: string;
  Fecha: string;
}


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>📜 Historial de Compras</Text>
            {historial.length === 0 ? (
                <Text style={styles.empty}>Aún no hay compras registradas.</Text>
            ) : (
                historial.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text>Producto ID: {item.id}</Text>
                        <Text>Marca: {item.Marca}</Text>
                        <Text>Cantidad: {item.Cantidad}</Text>
                        <Text>Total: ${parseFloat(item.Total).toFixed(2)}</Text>
                        <Text>Estado: {item.Estado}</Text>
                        <Text>Fecha: {new Date(item.Fecha).toLocaleDateString()}</Text>
                    </View>
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    card: { padding: 10, marginBottom: 10, backgroundColor: '#f0f0f0', borderRadius: 8 },
    empty: { textAlign: 'center', fontStyle: 'italic', color: '#888' }
});