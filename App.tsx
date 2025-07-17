import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavegadorPrincipal from './navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // 👈 import necesario

export default function App() {
  return (
    <SafeAreaProvider> {/* 👈 envolver aquí */}
      <NavegadorPrincipal />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30
  }
});
