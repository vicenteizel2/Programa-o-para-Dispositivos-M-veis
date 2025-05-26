import React from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { receitas } from '../data/receitas';

const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      data={receitas}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Receita', { receita: item })}>
          <Card style={{ marginBottom: 10 }}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
              <Text variant="titleMedium">{item.nome}</Text>
              <Text variant="bodySmall">⏱ {item.tempoPreparo} - 🍽 {item.porcoes} porções</Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;
