import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import DashboardScreen from './src/screen/dashboard_screen';
import AIAssistantScreen from './src/screen/ai_assistant_screen';
import LivrosScreen from './src/screen/livros_screen';
import LoginScreen from './src/screen/login_screen';
import MapViewerScreen from './src/screen/map_viewer_screen';
import MapsScreen from './src/screen/maps_screen';
import MundoScreen from './src/screen/mundo_screen';
import NPCScreen from './src/screen/npc_screen';
import PersonagensScreen from './src/screen/personagens_screen';
import PlayersScreen from './src/screen/players_screen';
import RegisterScreen from './src/screen/register_screen';
import RoleSelectScreen from './src/screen/role_select_screen';
import SplashScreen from './src/screen/splash_screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Players" component={PlayersScreen} />
        <Stack.Screen name="Personagens" component={PersonagensScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
        <Stack.Screen name="MapViewer" component={MapViewerScreen} />
        <Stack.Screen name="AIAssistant" component={AIAssistantScreen} />
        <Stack.Screen name="Mundo" component={MundoScreen} />
        <Stack.Screen name="NPCs" component={NPCScreen} />
        <Stack.Screen name="Livros" component={LivrosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
