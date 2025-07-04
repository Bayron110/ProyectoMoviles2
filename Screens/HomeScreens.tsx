import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image, ScrollView, Button } from 'react-native'
import React from 'react'

export default function HomeScreens({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.companyTitle}>Autoplus Repuestos</Text>

            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }}
                style={styles.image}
            />


            <Text style={styles.title}>Sobre Nosotros</Text>
            <Text style={styles.text}>
                Bienvenido a Repuestos Vehiculares, tu tienda de confianza para repuestos de todas las marcas de vehículos.
                Ofrecemos productos de calidad, atención personalizada y excelentes precios para mantener tu auto en óptimas condiciones.
            </Text>


            <Text style={styles.sectionTitle}>Misión</Text>
            <Text style={styles.text}>
                Brindar soluciones confiables y eficientes en la venta de repuestos automotrices, ofreciendo productos de calidad y
                atención oportuna para la seguridad de nuestros clientes.
            </Text>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.image}
            />


            <Text style={styles.sectionTitle}>Visión</Text>
            <Text style={styles.text}>
                Ser la empresa líder en el mercado de repuestos vehiculares a nivel nacional, destacándonos por la innovación,
                confianza y fidelidad con nuestros clientes.
            </Text>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                style={styles.image}
            />


            <Text style={styles.sectionTitle}>Nuestros Valores</Text>
            <Text style={styles.text}>✔️ Honestidad</Text>
            <Text style={styles.text}>✔️ Responsabilidad</Text>
            <Text style={styles.text}>✔️ Calidad</Text>
            <Text style={styles.text}>✔️ Compromiso</Text>
            <Text style={styles.text}>✔️ Atención al cliente</Text>


            <View style={styles.buttonContainer}>
                <Button title="Ir a Login" onPress={() => navigation.navigate('IniciarS')} color="#FF6600" />
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
        fontSize: 36,
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#FF6600',
    },
    sectionTitle: {
        fontSize: 22,
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
