import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import TabNavigator from './TabNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
