import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../screens/DashboardScreen';
import LeadsScreen from '../screens/LeadsScreen';
import EmailsScreen from '../screens/EmailsScreen';
import TasksScreen from '../screens/TasksScreen';
import AddScreen from '../screens/AddScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'speedometer' : 'speedometer-outline';
          } else if (route.name === 'Leads') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Add') {
            return (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: '#000',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="add" size={24} color="#fff" />
              </View>
            );
          } else if (route.name === 'Emails') {
            iconName = focused ? 'mail' : 'mail-outline';
          } else if (route.name === 'Tasks') {
            iconName = focused ? 'checkbox' : 'checkbox-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e5e5e5',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
        headerStyle: {
          backgroundColor: '#2f95dc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ marginRight: 10, marginLeft: 10 }}
          >
            <Ionicons name="menu" size={28} color="#fff" />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Leads" component={LeadsScreen} />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen name="Emails" component={EmailsScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
