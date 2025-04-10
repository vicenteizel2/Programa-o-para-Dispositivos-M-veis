import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { List } from 'react-native-paper';

const titulos = [
  { nome: "Premier League", anos: [1901, 1906, 1922, 1923, 1947, 1964, 1966, 1973, 1976, 1977, 1979, 1980, 1982, 1983, 1984, 1986, 1988, 1990, 2020] },
  { nome: "FA Cup", anos: [1965, 1974, 1986, 1989, 1992, 2001, 2006, 2022] },
  { nome: "Champions League", anos: [1977, 1978, 1981, 1984, 2005, 2019] },
  { nome: "Copa da Liga Inglesa", anos: [1981, 1982, 1983, 1984, 1995, 2001, 2003, 2012, 2022] },
  { nome: "Mundial de Clubes FIFA", anos: [2019] },
];

export default function TitulosScreen() {
  return (
    <ScrollView style={styles.container}>
      {titulos.map((titulo, index) => (
        <List.Accordion
          key={index}
          title={titulo.nome}
          titleStyle={{ color: 'white' }}
          style={{ backgroundColor: '#8b0d1d' }}
        >
          <Text style={styles.texto}>
            {titulo.anos.join(', ')}
          </Text>
        </List.Accordion>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c8102e',
    flex: 1,
  },
  texto: {
    padding: 16,
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
  },
});
