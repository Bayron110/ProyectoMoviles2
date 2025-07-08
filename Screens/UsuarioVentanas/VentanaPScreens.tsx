import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
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

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chevrolet')}>
                    <Text style={styles.buttonText}>Repuestos Chevrolet</Text>
                    <Image
                        source={require('../../assets/img/chevrolet2.png')}
                        style={styles.imgChevrolet}

                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Toyota')}>
                    <Text style={styles.buttonText}>Repuestos Toyota</Text>
                    <Image
                        source={require('../../assets/img/toyota.png')}
                        style={styles.imgToyota}

                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Huandawi')}>
                    <Text style={styles.buttonText}>Repuestos Hyundai</Text>

                    <Image
                        source={require('../../assets/img/hyundai.png')}
                        style={styles.imghyundai}

                    />
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
    imgChevrolet: {
        width: 230,
        height: 80,
        alignSelf: 'center',
        marginTop: 8

    },
    imgToyota: {
        width: 150,
        height: 100,
        alignSelf: 'center',
        marginTop: 8
    },
    imghyundai: {
        width: 190,
        height: 100,
        alignSelf: 'center',
        marginTop: 8
    }
})