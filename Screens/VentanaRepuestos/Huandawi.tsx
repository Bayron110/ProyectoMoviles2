import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import repuestos from '../../Json/Respuestos.json';

const hyundaiRepuestos = repuestos.Hyundai;

export default function Huandawi({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.companyTitle}>🚘 Repuestos Hyundai</Text>

      <Image
        source={{ uri: 'https://www.bing.com/th/id/OIP.ibGG9B4AU8ypFoHbB4TJdQHaE_?w=251&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' }}
        style={styles.bannerImage}
      />

      <Text style={styles.title}>¿Qué ofrecemos?</Text>
      <Text style={styles.text}>
        Somos tu mejor opción para repuestos Hyundai. Ofrecemos productos originales y alternativos para toda la línea Hyundai,
        con asesoría personalizada y atención rápida.
      </Text>

      <Text style={styles.sectionTitle}>Por qué elegirnos</Text>
      <Text style={styles.text}>✔️ Stock permanente para modelos Hyundai</Text>
      <Text style={styles.text}>✔️ Garantía en todos los productos</Text>
      <Text style={styles.text}>✔️ Envíos rápidos a todo el país</Text>
      <Text style={styles.text}>✔️ Atención especializada</Text>

      <Text style={styles.sectionTitle}>Nuestros Productos</Text>
      {hyundaiRepuestos.map((item, index) => (
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