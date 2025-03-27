import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavasCriptComponente() {
    // Lógica do Componente
    console.log("Chamou a função checarIdade");
    const nome = "Vicente";
    const idade = 16;
    function checarIdade(idade) {
        if (idade >= 18) {
            return "Maior de Idade";
        } else {
            return "Menor de Idade";
        }
    }
        function alerta() {
            console.log("Chamou a função alerta");
            alert("Alerta de Idade");
        }   


    // Retorno do JSX
    return (
    <View style={styles.containerAmarelo}>
      <Text style={styles.textoMedio}>JavasCriptComponente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
        <Text style={styles.textoMedio}>18+: {checarIdade(idade)}</Text>

        <Button title="Enviar" onPress={alerta}/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    containerAmarelo: {
        backgroundColor: 'yellow',
        padding:10,
        borderWidth: 5 
    },
    textoMedio: {
        fontSize: 15,
        fontWeight: 300
    }

})