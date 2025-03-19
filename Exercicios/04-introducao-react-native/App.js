import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//Componente principal
// Ele deve retornar o que será renderizado na tela (Template feito com JSX)
export default function App() {
  //Lógica do meu componente
  const nome = "Vicente"

  function alerta(){
    alert("Você clicou no botão")
  }

  //Retorno com JSX
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Comentario dentro do Template JSX */}
      {/* Código JavaScript*/}
      <Text>{5+5}</Text>
      <Text style={styles.text}>Aplicativo está aberto !!!</Text>
      <Button title='Alerta' onPress={alerta}></Button>
      <Image
      source= {{uri:'https://pbs.twimg.com/media/Ej5HqkuX0AAve9T.jpg'}}
        style={{
      height: 300,
        width: 300
    }}
    
    />


      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

//
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#3299CC',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  text: {
    color: 'white',
    fontSize: 30,
    textShadowColor: 'yellow',
    textShadowRadius: 100,
  },
  
});
