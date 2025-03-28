import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Filmes(props) {
  const { nome, ano, diretor, tipo, capa } = props;


  return (
    <View style={styles.container}>
     <Text style={styles.texto}>Filmes</Text>
     <Text style={styles.texto}>Nome: {nome}</Text>
     <Text style={styles.texto}>Ano: {ano}</Text>
     <Text style={styles.texto}>Diretor: {diretor}</Text>
     <Text style={styles.texto}>Tipo: {tipo}</Text>
      <Image 
      source={{ 
        uri: capa }} 
      style={{ 
        width: 200, height: 400 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3c2f2', 
    alignItems: 'center',
    justifyContent: 'center', 
    borderWidth: 5,
    borderRadius: 15, 
    padding: 20,
    marginTop: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  texto: {
    fontSize: 30, 
    fontWeight: '600', 
    color: '#fff', 
    textAlign: 'center', 
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
