import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator();

const temaPersonalizado = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2e7d32',
    secondary: '#81c784',
    background: '#f5f5f5',
    surface: '#ffffff',
  },
};

export default function App() {
  return (
    <PaperProvider theme={temaPersonalizado}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#2e7d32',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Mega Sena') iconName = 'numeric';
              if (route.name === 'Jogo do Bicho') iconName = 'paw';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Mega Sena" component={MegaSenaScreen} />
          <Tab.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
