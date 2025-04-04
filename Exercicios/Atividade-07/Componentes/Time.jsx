import React from 'react';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native';
import Jogador from './Jogador';

const teamColors = {
  'Flamengo': {
    background: '#CC0000',
    text: '#FFFFFF'
  },
  'Palmeiras': {
    background: '#006437',
    text: '#FFFFFF'
  },
  'Corinthians': {
    background: '#FFFFFF',
    text: '#000000',
    border: '#000000'
  },
  'Atlético Mineiro': {
    background: '#000000',
    text: '#FFFFFF',
    border: '#FFFFFF'
  }
};

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  const colors = teamColors[nome] || {
    background: '#F5F5F5',
    text: '#000000'
  };

  return (
    <Card style={[
      styles.card, 
      { 
        backgroundColor: colors.background,
        borderColor: colors.border || colors.background,
        borderWidth: colors.border ? 1 : 0
      }
    ]}>
      <Card.Content>
        <View style={styles.header}>
          <Avatar.Image size={60} source={{ uri: imagem }} />
          <View style={styles.headerText}>
            <Title style={[styles.title, { color: colors.text }]}>{nome}</Title>
            <Paragraph style={[styles.text, { color: colors.text }]}>
              Fundado em: {anoFundacao}
            </Paragraph>
            <Paragraph style={[styles.text, { color: colors.text }]}>
              Mascote: {mascote}
            </Paragraph>
          </View>
        </View>
      </Card.Content>
      
      <ScrollView contentContainerStyle={styles.jogadoresContainer}>
        {jogadores.map((jogador, jogadorIndex) => (
          <Jogador 
            key={jogadorIndex}
            nome={jogador.nome} 
            numero={jogador.numero} 
            imagem={jogador.imagem}
            teamColor={colors}
            teamName={nome}  
          />
        ))}
      </ScrollView>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 3,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    opacity: 0.9,
  },
  jogadoresContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
});

export default Time;