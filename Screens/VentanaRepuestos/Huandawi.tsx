import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React from 'react';

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

      <View style={styles.buttonContainer}>
        <Button
          title="Volver al Inicio"
          onPress={() => navigation.navigate('Home')}
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
  buttonContainer: {
    marginTop: 30,
    marginBottom: 40,
    alignSelf: 'center',
    width: '60%',
  },
});
