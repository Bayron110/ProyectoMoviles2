import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import repuestos from '../../Json/Respuestos.json';

const chevroletRepuestos = repuestos.Chevrolet;

export default function Chevrolet({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.companyTitle}>🚗 Repuestos Chevrolet</Text>

      <Image
        source={{ uri: 'https://grupocondor.com.py/wp-content/uploads/2022/07/Repuestos-para-auto-y-camiones-Paraguay-Grupo-Condor.jpg' }}
        style={styles.bannerImage}
      />

      <Text style={styles.title}>¿Qué ofrecemos?</Text>
      <Text style={styles.text}>
        En nuestra tienda especializada en repuestos Chevrolet, ofrecemos piezas originales y alternativas para todos los modelos.
        Nos enfocamos en garantizar calidad, disponibilidad y precios justos para mantener tu vehículo en las mejores condiciones.
      </Text>

      <Text style={styles.sectionTitle}>Ventajas</Text>
      <Text style={styles.text}>✔️ Piezas originales y certificadas</Text>
      <Text style={styles.text}>✔️ Asesoría técnica especializada</Text>
      <Text style={styles.text}>✔️ Amplio inventario</Text>
      <Text style={styles.text}>✔️ Envíos a todo el país</Text>

      <Text style={styles.sectionTitle}>Nuestros Productos</Text>
      {chevroletRepuestos.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={{ uri: item.imagen }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.nombre}</Text>
          <Text style={styles.cardText}>{item.descripcion}</Text>
          <Text style={styles.cardText}>Marca: {item.marca}</Text>
          <Text style={styles.cardText}>💰 ${item.precio.toFixed(2)} | Stock: {item.stock}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Detalle', { item })}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.navigationButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('VentanaP')}
        >
          <Text style={styles.buttonText}>Volver al Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Carrito')}
        >
          <Text style={styles.buttonText}>Ir al Carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  companyTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF6600',
    textAlign: 'center',
    marginBottom: 20,
  },
  bannerImage: {
    height: 240,
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2C3E50',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: '#34495E',
    borderBottomWidth: 2,
    borderBottomColor: '#FF6600',
    paddingBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6600',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#FF6600',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  navigationButtons: {
    marginTop: 30,
    gap: 15,
  },
});
