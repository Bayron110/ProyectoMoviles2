import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

export default function VentanaPScreens({ navigation }: any) {
    const animBienvenida = useRef(new Animated.Value(0)).current; 
    const animBtn1 = useRef(new Animated.Value(0)).current;
    const animBtn2 = useRef(new Animated.Value(0)).current;
    const animBtn3 = useRef(new Animated.Value(0)).current;
    const animPerfil = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        async function reproducirSonidoExito() {
            const { sound } = await Audio.Sound.createAsync(
                require('../../assets/sounds/exito.mp3')
            );
            await sound.playAsync();
        }
        reproducirSonidoExito();
        const anims = [animBienvenida, animBtn1, animBtn2, animBtn3, animPerfil];
        anims.forEach(anim => anim.setValue(0)); 
        Animated.stagger(150,
            anims.map(anim =>
                Animated.spring(anim, {
                    toValue: 1,
                    friction: 7,
                    useNativeDriver: true,
                })
            )
        ).start();

    }, []);

    const animStyle = (animValue: Animated.Value) => ({
        transform: [
            {
                translateY: animValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                }),
            },
            {
                scale: animValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                }),
            },
        ],
        opacity: animValue,
    });

    return (
        <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/11556663/pexels-photo-11556663.jpeg' }}
            style={styles.background}
            resizeMode="cover"
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.overlay}>
                    <Animated.Text style={[styles.bienvenida, animStyle(animBienvenida)]}>
                        Bienvenido Estimado Usuario
                    </Animated.Text>

                    <Text style={styles.subtitulo}>Explora nuestros productos de repuestos</Text>

                    <Animated.View style={[animStyle(animBtn1), { width: '100%' }]}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chevrolet')}>
                            <Text style={styles.buttonText}>Repuestos Chevrolet</Text>
                            <Image source={require('../../assets/img/chevrolet2.png')} style={styles.logoImage} />
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View style={[animStyle(animBtn2), { width: '100%' }]}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Toyota')}>
                            <Text style={styles.buttonText}>Repuestos Toyota</Text>
                            <Image source={require('../../assets/img/toyota.png')} style={styles.logoImage} />
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View style={[animStyle(animBtn3), { width: '100%' }]}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Huandawi')}>
                            <Text style={styles.buttonText}>Repuestos Hyundai</Text>
                            <Image source={require('../../assets/img/hyundai.png')} style={styles.logoImage} />
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View style={[animStyle(animPerfil), { width: '100%' }]}>
                        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('MyTab')}>
                            <Text style={styles.profileButtonText}>Ir a Mi Perfil</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 50,
        paddingHorizontal: 16,
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 25,
        padding: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
        alignItems: 'center',
    },
    bienvenida: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1e272e',
        textAlign: 'center',
        marginBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    subtitulo: {
        fontSize: 18,
        color: '#34495e',
        textAlign: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: 'rgba(106, 153, 78, 0.9)',
        paddingVertical: 14,
        paddingHorizontal: 22,
        borderRadius: 16,
        marginTop: 18,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
    },
    logoImage: {
        width: 180,
        height: 70,
        marginTop: 10,
        resizeMode: 'contain',
    },
    profileButton: {
        backgroundColor: 'rgba(243, 156, 18, 0.9)',
        paddingVertical: 14,
        paddingHorizontal: 22,
        borderRadius: 16,
        marginTop: 32,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
    },
    profileButtonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
