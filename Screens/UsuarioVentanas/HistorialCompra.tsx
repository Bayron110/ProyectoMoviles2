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
            <Text style={styles.cardText}>🆔 Producto ID: {item.id}</Text>
            <Text style={styles.cardText}>🔧 Marca: {item.Marca}</Text>
            <Text style={styles.cardText}>📦 Cantidad: {item.Cantidad}</Text>
            <Text style={styles.cardText}>💲 Total: ${parseFloat(item.Total).toFixed(2)}</Text>
            <Text style={styles.cardText}>📌 Estado: {item.Estado}</Text>
            <Text style={styles.cardText}>📅 Fecha: {new Date(item.Fecha).toLocaleDateString()}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF6600',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF4E6',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#999',
    fontSize: 16,
    marginTop: 40,
  },
});
