import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitaScreen from './screens/ReceitaScreen';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Receitas" component={HomeScreen} />
          <Stack.Screen name="Receita" component={ReceitaScreen} options={({ route }) => ({
            title: route.params.receita.nome
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
