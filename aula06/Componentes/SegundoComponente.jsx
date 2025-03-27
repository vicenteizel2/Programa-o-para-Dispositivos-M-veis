import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SegundoComponente() {
  return (
    <View style={styles.containerAzul}>
      <Text style={styles.textoMedio}>SegundoComponente</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    containerAzul: {
        backgroundColor: 'blue',
        padding:20,
        borderWidth: 10 
    },
    textoMedio: {
        fontSize: 15,
        fontWeight: 300
    }
  
})
