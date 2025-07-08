import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import React from 'react';

export default function Chevrolet({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.companyTitle}>Repuestos Chevrolet</Text>

      <Image
        source={{ uri: 'https://grupocondor.com.py/wp-content/uploads/2022/07/Repuestos-para-auto-y-camiones-Paraguay-Grupo-Condor.jpg' }}
        style={styles.image}
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
