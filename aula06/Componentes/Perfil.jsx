import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

    console.log("Propiedades ->" , props)



  return (
    <View style={styles.containerAzul}>
      <Text style={styles.textoMedio}>Perfil</Text>
        <Text>Nome: {props.nome}</Text>
        <Text>Idade: {props.idade}</Text>
        <Text>Telefone: {props.telefone}</Text>
        <Text>Email: {props.email}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    containerAzul: {
        backgroundColor: 'grey',
        padding:20,
        borderWidth: 10 
    },
    textoMedio: {
        fontSize: 15,
        fontWeight: 300
    }
})