import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreens from "../Screens/HomeScreens";
import IniciaeScreens from "../Screens/IniciaeScreens";
import RegistroScreens from "../Screens/RegistroScreens";

//COMPONENTES



const Stack =  createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="IniciarS" component={IniciaeScreens}/>
            <Stack.Screen name="Registro" component={RegistroScreens}/>
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