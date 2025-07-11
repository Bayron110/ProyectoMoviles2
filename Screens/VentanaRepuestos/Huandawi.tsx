import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React from 'react';
import repuestos from '../../Json/Respuestos.json';

const hyundaiRepuestos = repuestos.Hyundai;

export default function Huandawi({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.companyTitle}>Repuestos Hyundai</Text>

      <Image
        source={{ uri: 'https://www.bing.com/th/id/OIP.ibGG9B4AU8ypFoHbB4TJdQHaE_?w=251&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' }}
        style={styles.image}
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

          <View style={{ marginTop: 10 }}>
            <Button
              title="Comprar"
              color="#FF6600"
              onPress={() => navigation.navigate('Detalle', { item })}
            />
          </View>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <Button
          title="Volver al Inicio"
          onPress={() => navigation.navigate('VentanaP')}
          color="#FF6600"
        />
        <Button
          title="Ver el Carrito"
          onPress={() => navigation.navigate('Carrito')}
          color="#FF6600"
        />
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
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardImage: {
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6600',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
    alignSelf: 'center',
    width: '60%',
  },
});