import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';

const ReceitaScreen = ({ route }) => {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: receita.imagem }} />
        <Card.Content>
          <Text variant="titleLarge" style={{ marginBottom: 10 }}>{receita.nome}</Text>
          <Text variant="bodyMedium">⏱ {receita.tempoPreparo} - 🍽 {receita.porcoes} porções</Text>

          <Text variant="titleMedium" style={{ marginTop: 10 }}>Ingredientes</Text>
          {receita.ingredientes.map((item, index) => (
            <Text key={index}>• {item}</Text>
          ))}

          <Text variant="titleMedium" style={{ marginTop: 10 }}>Modo de Preparo</Text>
          {receita.modoPreparo.map((passo, index) => (
            <Text key={index}>{passo}</Text>
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default ReceitaScreen;
