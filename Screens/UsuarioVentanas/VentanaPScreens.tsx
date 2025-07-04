import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function VentanaPScreens({ navigation }: any) {


    return (
        <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/11556663/pexels-photo-11556663.jpeg' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.bienvenida}>Bienvenido Estimado Usuario</Text>
                <Text style={styles.subtitulo}>Explora nuestros productos de repuestos</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Repuestos Chevrolet</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Repuestos Toyota</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('')}>
                    <Text style={styles.buttonText}>Repuestos Huandwi</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
    },
    bienvenida: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#6a994e',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})