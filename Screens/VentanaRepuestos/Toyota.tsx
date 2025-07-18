import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import repuestos from '../../Json/Respuestos.json';

const toyotaRepuestos = repuestos.Toyota;

export default function Toyota({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.companyTitle}>🚗 Repuestos Toyota</Text>

      <Image
        source={{ uri: 'https://www.bing.com/th/id/OIP.37-Uhk1ch79Cum4zTZn40gHaE7?w=254&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' }}
        style={styles.bannerImage}
      />

      <Text style={styles.title}>¿Qué ofrecemos?</Text>
      <Text style={styles.text}>
        En nuestra tienda especializada en repuestos Toyota, encontrarás piezas originales y compatibles
        para modelos antiguos y nuevos. Nos enfocamos en calidad, seguridad y excelente atención al cliente.
      </Text>

      <Text style={styles.sectionTitle}>Beneficios</Text>
      <Text style={styles.text}>✔️ Repuestos 100% garantizados</Text>
      <Text style={styles.text}>✔️ Asesoría para modelos Toyota antiguos y nuevos</Text>
      <Text style={styles.text}>✔️ Precios competitivos</Text>
      <Text style={styles.text}>✔️ Atención personalizada</Text>

      <Text style={styles.sectionTitle}>Nuestros Productos</Text>
      {toyotaRepuestos.map((item, index) => (
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
    backgroundColor: '#fff',
  },
  companyTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6600',
    textAlign: 'center',
    marginBottom: 25,
  },
  bannerImage: {
    height: 240,
    width: '100%',
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#FF6600',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#444',
    borderBottomWidth: 2,
    borderBottomColor: '#FF6600',
    paddingBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
    color: '#333',
  },
  card: {
    backgroundColor: '#fdfdfd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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