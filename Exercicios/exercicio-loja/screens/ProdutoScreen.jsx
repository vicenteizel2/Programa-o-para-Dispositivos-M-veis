import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => setProduto(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Carregando detalhes...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title title={produto.title} subtitle={produto.brand} />
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text style={styles.preco}>Preço: ${produto.price}</Text>
          <Text style={{ marginTop: 8 }}>{produto.description}</Text>
        </Card.Content>
      </Card>
      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Imagens adicionais:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {produto.images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={styles.imagem}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  preco: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  imagem: {
    width: 120,
    height: 120,
    margin: 8,
    borderRadius: 8,
  },
});
