import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const jogadores = [
  { nome: 'Mohamed Salah', numero: 11, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa_tWzpIHeeoz-Y0Uxw9t3SE6EZ1VuoEg_w&s' },
  { nome: 'Virgil van Dijk', numero: 4, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWpsWhG9E99eStH3iCaKndrhOoUmwzuoNUQ&s' },
  { nome: 'Alisson Becker', numero: 1, imagem: 'https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2024-12/alisson-becker-liverpool-fc-271224_41236af2e17c1f121f392b369455eaa1.webp?itok=bbMmwqxm' },
  { nome: 'Trent Alexander-Arnold', numero: 66, imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/02/Trent-Alexander-Arnold-e1738781366507.jpeg?w=1200&h=900&crop=1' },
  { nome: 'Luis Díaz', numero: 7, imagem: 'https://apostagolos.com/wp-content/uploads/2024/06/luis-diaz-scaled.jpg' },
];

export default function JogadoresScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <List.Item
            title={`${item.nome} (#${item.numero})`}
            titleStyle={{ color: 'white' }}
            style={{ backgroundColor: '#c8102e' }}
            left={() => (
              <Image source={{ uri: item.imagem }} style={styles.imagem} />
            )}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8102e',
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
});
