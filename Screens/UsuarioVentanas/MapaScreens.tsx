import React, { useCallback, useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    PermissionsAndroid,
    Alert,
    TouchableOpacity,
    Text,
} from 'react-native';
import MapView, { Circle, Region, PROVIDER_GOOGLE } from 'react-native-maps';

const UBICACION_INICIAL: Region = {
    latitude: -0.176,
    longitude: -78.479,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

export default function MapaScreens() {
    const [region, setRegion] = useState<Region>(UBICACION_INICIAL);

    useEffect(() => {
        const requestPermissions = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Permiso para acceder a la ubicación',
                            message: 'Necesitamos tu ubicación para mostrar el mapa correctamente.',
                            buttonNeutral: 'Preguntar después',
                            buttonNegative: 'Cancelar',
                            buttonPositive: 'Aceptar',
                        }
                    );
                    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                        Alert.alert('Permiso denegado', 'No podremos mostrar tu ubicación.');
                    }
                } catch (err) {
                    console.warn(err);
                }
            }
        };
        requestPermissions();
    }, []);

    const handleRegionChangeComplete = useCallback((newRegion: Region) => {
        setRegion(newRegion);
    }, []);

    const centrarEnUbicacion = () => {
        setRegion(UBICACION_INICIAL);
    };

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                onRegionChangeComplete={handleRegionChangeComplete}
                showsUserLocation={true}
                showsMyLocationButton={true}
                loadingEnabled={true}
            >
                <Circle
                    center={{ latitude: region.latitude, longitude: region.longitude }}
                    radius={800}
                    strokeColor="rgba(0,0,255,0.6)"
                    fillColor="rgba(0,0,255,0.2)"
                    strokeWidth={2}
                />
            </MapView>

           
            <TouchableOpacity style={styles.botonCentrar} onPress={centrarEnUbicacion}>
                <Text style={styles.textoBoton}>📍</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    botonCentrar: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 14,
        borderRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textoBoton: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
