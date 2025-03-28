import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './Componentes/Filmes';
import Series from './Componentes/Series';
import React from 'react';

export default function App() {
  const listaFilmes = [
    {
    "nome": "Interestelar",
    "ano": 2014,
    "diretor": "Christopher Nolan",
    "tipo": "Ficção Científica",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png"
    },
    {
    "nome": "Purple Fiction",
    "ano": 1994,
    "diretor": "Quentin Tarantino",
    "tipo": "Ação",
    "capa": 'https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg'
    },
    {
    "nome": "O Poderoso Chefão",
    "ano": 1972,
    "diretor": "Francis Ford Coppola",
    "tipo": "Drama",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/The_Godfather%2C_The_Game.jpg/200px-The_Godfather%2C_The_Game.jpg"
    },
    {
    "nome": "O senhor dos Anéis: O Retorno do Rei",
    "ano": 2003,
    "diretor": "Peter Jackson",
    "tipo": "Fantasia",
    "capa": "https://upload.wikimedia.org/wikipedia/pt/0/0d/EsdlaIII.jpg"
    }
    
    ];
    const listaSeries = [
    {
    "nome": "Family Guy",
    "ano": 1999,
    "diretor": "Seth MacFarlane",
    "temporadas": 19,
    "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9eLJhbcVnGuXKYndxWcLnLDo1sqZlMEe3g&s"
    },
    {
    "nome": "Supernatural",
    "ano": 2005,
    "diretor": "Eric Kripke",
    "temporadas": 15,
    "capa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMkxbCCacBcQMnn8vBPQEbNp_36WbtIRxVQ&s"
    },
    {
    "nome": "Sons of Anarchy",
    "ano": 2008,
    "diretor": "Kurt Sutter",
    "temporadas": 7,
    "capa": "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
    },
    {
    "nome": "Two and a Half men ",
    "ano": 2003,
    "diretor": "Lee Aronsohn",
    "temporadas": 12,
    "capa":"https://upload.wikimedia.org/wikipedia/pt/9/9b/Two_and_a_Half_Men_%285%C2%AA_temporada%29.jpg"
    }
    ];
  return (
    <ScrollView>
      <View styles={styles.container}>
        <StatusBar style="auto" />
{
  listaFilmes.map(
    filmes => {
      return(
         <Filmes nome={filmes.nome} 
         ano={filmes.ano} 
         diretor={filmes.diretor} 
         tipo={filmes.tipo} 
         capa={filmes.capa} />
      )
    }
  )
}
{
  listaSeries.map(
    series => {
      return(
         <Series nome={series.nome} 
         ano={series.ano} 
         diretor={series.diretor} 
         temporadas={series.temporadas} 
         capa={series.capa} />
      )

    }
  )
}
      </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
  },
});
