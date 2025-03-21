import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import SegundoComponente from './Componentes/SegundoComponente';


export default function App() {
  return (
    <View style={styles.container}>

      <PrimeiroComponente/>
      <SegundoComponente/>
    </View>
      );
}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
