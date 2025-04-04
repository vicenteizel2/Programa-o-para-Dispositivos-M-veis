import React from 'react';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const Jogador = ({ nome, numero, imagem, teamColor, teamName }) => {
  const isAtletico = teamName === 'Atlético Mineiro';
  
  return (
    <Card style={[
      styles.card, 
      { 
        backgroundColor: teamColor?.background || '#F5F5F5',
        marginVertical: 4,
        borderWidth: isAtletico ? 1 : 0,
        borderColor: isAtletico ? '#FFFFFF' : 'transparent'
      }
    ]}>
      <Card.Content style={styles.content}>
        <Avatar.Image size={48} source={{ uri: imagem }} />
        <View style={styles.textContainer}>
          <Title style={[styles.nome, { 
            color: teamColor?.text || '#000000' 
          }]}>
            {nome}
          </Title>
          <Paragraph style={[styles.numero, { 
            color: teamColor?.text || '#000000' 
          }]}>
            Número: {numero}
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  textContainer: {
    marginLeft: 12,
  },
  nome: {
    fontSize: 16,
  },
  numero: {
    fontSize: 14,
  },
});

export default Jogador;