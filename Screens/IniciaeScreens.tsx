import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function IniciaeScreens() {
 

    
    
  
  return (
    <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Repuestos Vehiculares</Text>
                <TextInput
                    placeholder="Correo electrónico"
                    placeholderTextColor="#ddd"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#ddd"
                    secureTextEntry
                    style={styles.input}
                />
                <Button title="Iniciar sesión" color="#FF6600" />
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        borderRadius: 10,
        width: '85%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#fff',
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
    },
});
