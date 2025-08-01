import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native'
import { supabase } from '../supabase/Config'
import { useState } from 'react'

export default function RegistroScreens({ navigation }: any) {
  const [cedula, setcedula] = useState("")
  const [nombre, setnombre] = useState("")
  const [apellido, setapellido] = useState("")
  const [correo, setcorreo] = useState("")
  const [Telefono, setTelefono] = useState("")
  const [dirreccion, setdirrecion] = useState("")
  const [contrasena, setcontrasena] = useState("")

  async function registrar(uid: String) {
    const { error } = await supabase
      .from('Usuarios')
      .insert({
        id: uid,
        cedula: cedula,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        Telefono: Telefono,
        dirreccion: dirreccion,
        contrasena: contrasena
      })

  }

  async function guardar() {
  const { data, error } = await supabase.auth.signUp({
    email: correo,
    password: contrasena,
  })

  //console.log(data.user?.id)
  await registrar(data.user?.id as String)

  //console.log(data)
  //console.log(error)

  if (correo !== "" && contrasena !== "") {
    setcedula("")
    setnombre("")
    setapellido("")
    setcorreo("")
    setTelefono("")
    setdirrecion("")
    setcontrasena("")

    navigation.navigate("Registro")
  } else {
    Alert.alert("Aviso", "No ha llenando todos los campos Solicitados")
    return
  }
}

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/28967025/pexels-photo-28967025.jpeg?_gl=1*iomakc*_ga*NTk0MTM0NjM2LjE3NDkxMzAzOTg.*_ga_8JE65Q40S6*czE3NTE2MzM0MTkkbzQkZzEkdDE3NTE2MzM1MTQkajU2JGwwJGgw' }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Registro de Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Cedula"
          placeholderTextColor="#999"
          onChangeText={(text) => setcedula(text)}
          value={cedula}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#999"
          onChangeText={(text) => setnombre(text)}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#999"
          onChangeText={(text) => setapellido(text)}
          value={apellido}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#999"
          onChangeText={(text) => setcorreo(text)}
          value={correo}
        />

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#999"
          onChangeText={(text) => setTelefono(text)}
          value={Telefono}
        />

        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#999"
          onChangeText={(text) => setdirrecion(text)}
          value={dirreccion}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor="#999"
          onChangeText={(text) => setcontrasena(text)}
          value={contrasena}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => guardar()}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("IniciarS")}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 240, 0.7)',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 60,
    borderWidth: 1,
    borderColor: '#d2b48c',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#5c4c3c',
  },
  input: {
    height: 50,
    borderColor: '#a98260',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fffaf0',
    color: '#333',
  },
  button: {
    backgroundColor: '#6a994e',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
})