import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../../supabase/Config';

export default function PerfilScreens({ navigation }: any) {
  const [perfil, setPerfil] = useState<any>(null);
  const [imagenUri, setImagenUri] = useState<string | null>(null);

  useEffect(() => {
    const obtenerPerfil = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        console.log("Error al obtener usuario:", userError?.message);
        return;
      }

      const { data, error: perfilError } = await supabase
        .from('Usuarios')
        .select('*')
        .eq('id', user.id)
        .single();

      if (perfilError) {
        console.log("Error al obtener perfil:", perfilError.message);
      } else {
        setPerfil(data);
      }
    };

    obtenerPerfil();
  }, []);

  const elegirImagen = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permiso.status !== 'granted') {
      Alert.alert('Permiso requerido', 'Necesitamos acceso a tu galería para seleccionar una imagen.');
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!resultado.canceled) {
      setImagenUri(resultado.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Perfil del Usuario</Text>

      {/* Imagen de perfil */}
      <TouchableOpacity onPress={elegirImagen}>
        <Image
          source={imagenUri ? { uri: imagenUri } : require('../../assets/img/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.cambiarFoto}>📸 Cambiar foto</Text>
      </TouchableOpacity>

      {/* Datos del perfil */}
      {perfil ? (
        <View style={styles.card}>
          <Text>Cédula: {perfil.cedula}</Text>
          <Text>Nombre: {perfil.nombre}</Text>
          <Text>Apellido: {perfil.apellido}</Text>
          <Text>Correo: {perfil.correo}</Text>
          <Text>Teléfono: {perfil.Telefono}</Text>
          <Text>Dirección: {perfil.dirreccion}</Text>
        </View>
      ) : (
        <Text style={styles.empty}>No hay datos de perfil.</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await supabase.auth.signOut();
          navigation.navigate("IniciarS");
        }}
      >
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
      <Button title='Regresar' onPress={()=>  navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF6600',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FF6600',
  },
  cambiarFoto: {
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    width: '100%',
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888',
  },
  button: {
    backgroundColor: '#FF6600',
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
