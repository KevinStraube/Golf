import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import LoginPage from './Pages/LoginPage';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Login" component={LoginPage} />
    </Tab.Navigator>
    );
};

export default TabNavigator;