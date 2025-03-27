import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ListaComponente() {
    const listaCarros = ["Fusca", "Brasilia", "Chevette", "Opala", "Maverick"];
  
  
    return (
    <View style={styles.container}>
        {listaCarros.map(
            (carro) => <Text>{carro}</Text>
        )}
      
        {
            listaCarros.map(
                (carro) => <Text style={styles.containerGrey}>{carro}</Text>
            )
        }



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    padding: 20,
    borderWidth: 10,
  },
  containerGrey: {
    backgroundColor: "grey",
    padding: 20,
    borderWidth: 10,
  },
});