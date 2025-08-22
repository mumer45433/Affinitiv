
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"   />
      <AppNavigator />
    </NavigationContainer>
  );
}