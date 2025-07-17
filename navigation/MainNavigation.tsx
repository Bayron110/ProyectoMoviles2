import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreens from "../Screens/HomeScreens";
import IniciaeScreens from "../Screens/IniciaeScreens";
import RegistroScreens from "../Screens/RegistroScreens";
import VentanaPScreens from "../Screens/UsuarioVentanas/VentanaPScreens";
import Chevrolet from "../Screens/VentanaRepuestos/Chevrolet";
import Toyota from "../Screens/VentanaRepuestos/Toyota";
import Huandawi from "../Screens/VentanaRepuestos/Huandawi";
import FacturaScreens from "../Screens/UsuarioVentanas/FacturaScreens";
import CarritoScreens from "../Screens/UsuarioVentanas/CarritoScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PerfilScreens from "../Screens/UsuarioVentanas/PerfilScreens";
import HistorialCompra from "../Screens/UsuarioVentanas/HistorialCompra";
import { SafeAreaView } from 'react-native-safe-area-context'
import React from "react";
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator()

function MyStack() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreens} />
                <Stack.Screen name="IniciarS" component={IniciaeScreens} />
                <Stack.Screen name="Registro" component={RegistroScreens} />
                <Stack.Screen name="VentanaP" component={VentanaPScreens} />
                <Stack.Screen name="MyTab" component={MyTab} />
                <Stack.Screen name="Chevrolet" component={Chevrolet} />
                <Stack.Screen name="Toyota" component={Toyota} />
                <Stack.Screen name="Huandawi" component={Huandawi} />
                <Stack.Screen name="Detalle" component={FacturaScreens} />
                <Stack.Screen name="Carrito" component={CarritoScreens} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

const Tab = createBottomTabNavigator()

function MyTab() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#FF6600',
                    tabBarInactiveTintColor: '#999',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopWidth: 0,
                        elevation: 5,
                        height: 60,
                    },
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Perfil') {
                            iconName = 'person-circle-outline';
                        } else if (route.name === 'Historial') {
                            iconName = 'document-text-outline';
                        }

                        return <Ionicons name={iconName as any} size={26} color={color} />;
                    },
                })}
            >
                <Tab.Screen name="Perfil" component={PerfilScreens} />
                <Tab.Screen name="Historial" component={HistorialCompra} />
            </Tab.Navigator>
        </SafeAreaView>
    );
}



export default function NavegadorPrincipal() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}