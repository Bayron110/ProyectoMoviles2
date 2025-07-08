import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React from 'react';

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
