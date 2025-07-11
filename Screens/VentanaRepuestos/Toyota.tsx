import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React from 'react';
import repuestos from '../../Json/Respuestos.json';

const toyotaRepuestos = repuestos.Toyota;

export default function Toyota({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.companyTitle}>Repuestos Toyota</Text>

      <Image
        source={{ uri: 'https://www.bing.com/th/id/OIP.37-Uhk1ch79Cum4zTZn40gHaE7?w=254&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' }}
        style={styles.image}
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
          <Text style={styles.cardText}>
            💰 ${item.precio.toFixed(2)} | Stock: {item.stock}
          </Text>

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