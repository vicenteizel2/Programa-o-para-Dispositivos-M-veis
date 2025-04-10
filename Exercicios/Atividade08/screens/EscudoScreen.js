import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nomeTime}>Liverpool Football Club</Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrltzwSHFaxefWkwzZLJz8x8mhDo3Sdt4cA&s' }}
        style={styles.escudo}
      />
      <Text style={styles.nomeTime}>You'll Never Walk Alone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c8102e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nomeTime: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  escudo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
