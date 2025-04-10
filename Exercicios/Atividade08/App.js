import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#ffd1dc',
            tabBarStyle: {
              backgroundColor: '#c8102e',
              paddingBottom: 5,
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="shield" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Jogadores"
            component={JogadoresScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-group" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Títulos"
            component={TitulosScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="trophy" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
