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


const Stack =  createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="IniciarS" component={IniciaeScreens}/>
            <Stack.Screen name="Registro" component={RegistroScreens}/>
            <Stack.Screen name="VentanaP" component={VentanaPScreens}/>
            <Stack.Screen name="Chevrolet" component={Chevrolet}/>
            <Stack.Screen name="Toyota" component={Toyota}/>
            <Stack.Screen name="Huandawi" component={Huandawi}/>
            <Stack.Screen name="Detalle" component={FacturaScreens}/>
            <Stack.Screen name="Carrito" component={CarritoScreens}/>
        </Stack.Navigator>
    )
}



export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}