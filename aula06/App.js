import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import PrimeiroComponente from './Componentes/PrimeiroComponente';
//import SegundoComponente from './Componentes/SegundoComponente';
//import JavasCriptComponente from './Componentes/JavasCriptComponente';
//import Perfil from './Componentes/Perfil';
import ListaComponente from './Componentes/ListaComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <PrimeiroComponente/>
      <SegundoComponente/>
      <JavasCriptComponente/> */}
      <ListaComponente/>
      
      {/* <Perfil
      nome="Vicente"
      idade={29}
      telefone="99999999"
      email="vicente.augusto@iesb.edu.br"
      />

      <Perfil
      nome="Juão"
      idade={10}
      telefone="99999999"
      email="juão.loko@iesb.edu.br"
      /> */}
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
