import { useState, useEffect } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../supabase/Config';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';

export default function IniciaeScreens({ navigation }: any) {
    const [correo, setcorreo] = useState('');
    const [contrasena, setcontrasena] = useState('');
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    // Liberar sonido cuando el componente se desmonta
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    async function reproducirExito() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/exito.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }

    async function reproducirError() {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/error.mp3.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }

    async function iniciar() {
        const { data } = await supabase.auth.signInWithPassword({
            email: correo,
            password: contrasena,
        });

        if (data.user != null) {
            await reproducirExito();
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            navigation.navigate("VentanaP");
        } else {
            await reproducirError(); 
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);

            Alert.alert(
                "Error de inicio de sesión",
                "Revisa tus credenciales e inténtalo de nuevo"
            );
        }
    }

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' }}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <TextInput
                    placeholder="Correo electrónico"
                    placeholderTextColor="#ddd"
                    style={styles.input}
                    onChangeText={setcorreo}
                    value={correo}
                />
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#ddd"
                    secureTextEntry
                    style={styles.input}
                    onChangeText={setcontrasena}
                    value={contrasena}
                />
                <Button title="Iniciar sesión" onPress={iniciar} color="#FF6600" />
                <Button title="Registrarse" onPress={() => navigation.navigate("Registro")} color="#2ae5c2" />
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
