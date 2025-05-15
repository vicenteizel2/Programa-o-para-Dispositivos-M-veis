import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const animais = [
  { numero: 1, nome: 'Avestruz', imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg' },
  { numero: 2, nome: 'Águia', imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg' },
  { numero: 3, nome: 'Burro', imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg' },
  { numero: 4, nome: 'Borboleta', imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg' },
  { numero: 5, nome: 'Cachorro', imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg' },
  { numero: 6, nome: 'Cabra', imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg' },
  { numero: 7, nome: 'Carneiro', imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg' },
  { numero: 8, nome: 'Camelo', imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg' },
  { numero: 9, nome: 'Cobra', imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg' },
  { numero: 10, nome: 'Coelho', imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg' },
];

export default function JogoDoBichoScreen() {
  const [selecionado, setSelecionado] = useState(null);
  const [confirmado, setConfirmado] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      const salvo = await AsyncStorage.getItem('animalBicho');
      if (salvo) setConfirmado(JSON.parse(salvo));
    };
    carregar();
  }, []);

  const confirmarEscolha = async () => {
    if (selecionado) {
      setConfirmado(selecionado);
      await AsyncStorage.setItem('animalBicho', JSON.stringify(selecionado));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleMedium" style={styles.titulo}>
        Selecione um Animal:
      </Text>
      <View style={styles.galeria}>
        {animais.map((a) => (
          <TouchableOpacity
            key={a.numero}
            onPress={() => setSelecionado(a)}
            style={[
              styles.item,
              selecionado?.numero === a.numero && styles.selecionado,
            ]}
          >
            <Image source={{ uri: a.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{a.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button
        mode="contained"
        onPress={confirmarEscolha}
        disabled={!selecionado}
        style={{ marginVertical: 16 }}
      >
        Confirmar Animal
      </Button>

      {confirmado && (
        <Card style={styles.card}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Text variant="titleLarge">Selecionado</Text>
            <Text variant="titleMedium">{confirmado.nome}</Text>
            <Image source={{ uri: confirmado.imagem }} style={styles.imagemGrande} />
          </Card.Content>
        </Card>
      )}
    </ScrollView>
  );
}

const largura = Dimensions.get('window').width / 3 - 24;

const styles = StyleSheet.create({
  container: { padding: 16 },
  titulo: { marginBottom: 12, textAlign: 'center' },
  galeria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: largura,
    margin: 4,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    padding: 4,
  },
  selecionado: {
    borderColor: '#2e7d32',
    backgroundColor: '#e8f5e9',
  },
  imagem: {
    width: '100%',
    height: 80,
    borderRadius: 8,
  },
  nome: {
    textAlign: 'center',
    marginTop: 4,
    fontSize: 12,
  },
  card: {
    marginTop: 20,
    padding: 16,
  },
  imagemGrande: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginTop: 12,
  },
});
