import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

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
    <View style={styles.container}>
      {/* Comentario dentro do Template JSX */}
      {/* Código JavaScript*/}
      <Text>{5+5}</Text>
      <Text style={styles.text}>Aplicativo está aberto !!!</Text>
      <Button title='Alerta' onPress={alerta}></Button>
      <Image
      source={{ uri:'https://blog.autocompara.com.br/wp-content/uploads/2024/06/carros-esportivos-1024x683.jpeg.webp'}}
      style={{
        height: 300,
        with: 300

      }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3299CC',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});
