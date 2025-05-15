import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Button, Card, Text, Chip } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MegaSenaScreen() {
  const [jogo, setJogo] = useState([]);
  const [jogos, setJogos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);

  useEffect(() => {
    carregarHistorico();
  }, []);

  const carregarHistorico = async () => {
    const salvo = await AsyncStorage.getItem('jogosMega');
    if (salvo) setJogos(JSON.parse(salvo));
  };

  const gerarJogoAleatorio = () => {
    let numeros = new Set();
    while (numeros.size < 6) {
      numeros.add(Math.floor(Math.random() * 60) + 1);
    }
    const novoJogo = Array.from(numeros).sort((a, b) => a - b);
    setJogo(novoJogo);
    salvarJogo(novoJogo);
  };

  const salvarJogo = async (jogoSalvo) => {
    const novosJogos = [...jogos, jogoSalvo];
    setJogos(novosJogos);
    await AsyncStorage.setItem('jogosMega', JSON.stringify(novosJogos));
  };

  const selecionarNumero = (numero) => {
    let atualizados = [...selecionados];
    if (atualizados.includes(numero)) {
      atualizados = atualizados.filter((n) => n !== numero);
    } else if (atualizados.length < 6) {
      atualizados.push(numero);
    }
    setSelecionados(atualizados.sort((a, b) => a - b));
  };

  const confirmarSelecaoManual = () => {
    if (selecionados.length === 6) {
      setJogo(selecionados);
      salvarJogo(selecionados);
      setSelecionados([]);
    }
  };

  const limparHistorico = async () => {
    await AsyncStorage.removeItem('jogosMega');
    setJogos([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={{ textAlign: 'center', marginBottom: 12 }}>
        Gerador de Mega Sena
      </Text>

      <Button mode="contained" onPress={gerarJogoAleatorio} style={styles.botao}>
        Gerar Jogo Aleatório
      </Button>

      <View style={styles.jogoContainer}>
        {jogo.map((num, index) => (
          <Chip key={index} style={styles.numero}>
            {num}
          </Chip>
        ))}
      </View>

      <Text variant="titleMedium" style={{ marginTop: 20 }}>
        Selecione até 6 números:
      </Text>

      <View style={styles.grid}>
        {[...Array(60).keys()].map((n) => {
          const numero = n + 1;
          const selecionado = selecionados.includes(numero);
          return (
            <TouchableOpacity
              key={numero}
              style={[styles.celula, selecionado && styles.celulaSelecionada]}
              onPress={() => selecionarNumero(numero)}
            >
              <Text style={selecionado ? styles.textoSelecionado : styles.textoNumero}>
                {numero}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Button
        mode="contained"
        onPress={confirmarSelecaoManual}
        disabled={selecionados.length !== 6}
        style={styles.botaoConfirmar}
      >
        Confirmar Números Selecionados
      </Button>

      <Button
        mode="outlined"
        onPress={limparHistorico}
        style={{ marginTop: 12 }}
        textColor="#b71c1c"
      >
        Limpar Histórico
      </Button>

      <Text variant="titleMedium" style={{ marginTop: 20 }}>
        Histórico de Jogos:
      </Text>

      {jogos.map((j, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {j.map((n, i) => (
              <Chip key={i} style={styles.numero}>
                {n}
              </Chip>
            ))}
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  botao: {
    marginBottom: 16,
  },
  botaoConfirmar: {
    marginTop: 12,
  },
  jogoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
    justifyContent: 'center',
  },
  numero: {
    margin: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  celula: {
    width: '12.5%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  },
  celulaSelecionada: {
    backgroundColor: '#1976d2',
    borderColor: '#0d47a1',
  },
  textoNumero: {
    fontSize: 14,
  },
  textoSelecionado: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    marginTop: 12,
    padding: 4,
  },
});
