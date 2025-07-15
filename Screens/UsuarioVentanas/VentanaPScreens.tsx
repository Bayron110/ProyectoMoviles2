import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'

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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyTab')}>
                <Text style={styles.buttonText}>Ir a Mi Perfil</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 20,
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    bienvenida: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2d3436',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitulo: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#6a994e',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginTop: 12,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    imgChevrolet: {
        width: 200,
        height: 60,
        alignSelf: 'center',
        marginTop: 8,
        resizeMode: 'contain',
    },
    imgToyota: {
        width: 160,
        height: 80,
        alignSelf: 'center',
        marginTop: 8,
        resizeMode: 'contain',
    },
    imghyundai: {
        width: 170,
        height: 80,
        alignSelf: 'center',
        marginTop: 8,
        resizeMode: 'contain',
    }
});
