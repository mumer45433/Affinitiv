import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';
import DashboardScreen from '../screens/DashboardScreen';
import LeadsScreen from '../screens/LeadsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TasksScreen from '../screens/TasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#2f95dc',
        drawerInactiveTintColor: '#666',
        drawerLabelStyle: {
          marginLeft: -5,
          fontSize: 16,
          fontWeight: '500',
        },
        drawerItemStyle: {
          height: 50,
        },
        headerStyle: {
          backgroundColor: '#2f95dc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="speedometer" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Dashboard Enterprise"
        component={DashboardScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Open Tasks"
        component={TasksScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Activities"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Leads"
        component={LeadsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
