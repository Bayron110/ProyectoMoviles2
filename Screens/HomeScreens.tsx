import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreens({navigation}: any) {
  return (
    <View>
      <Text>Bienvenido A AutoFusión Parts</Text>

      <TouchableOpacity onPress={()=>navigation.navigate("IniciarS")}>
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("Registro")}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})