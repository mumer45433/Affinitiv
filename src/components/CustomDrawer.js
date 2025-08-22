import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { customDrawerStyles as styles } from '../styles/styles';

const CustomDrawer = props => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} style={styles.drawerContainer}>
        <View style={styles.drawerHeader}>
          <Text style={styles.drawerHeaderText}>Affinitiv</Text>
          <Text style={styles.drawerSubtitle}>
            Car Research Powered by Affinitiv
          </Text>
        </View>

        <View style={styles.userSection}>
          <View style={styles.userInfo}>
            <Ionicons name="person-circle" size={40} color="#2f95dc" />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>Anthony Iannone</Text>
              <Text style={styles.userEmail}>tony@i1smartmarketing.com</Text>
            </View>
          </View>
        </View>

        <View style={styles.dealershipSection}>
          <Text style={styles.sectionTitle}>Current Dealership</Text>
          <View style={styles.dealershipInfo}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="business" size={20} color="#666" />
              <View style={styles.dealershipDetails}>
                <Text style={styles.dealershipName}>Downtown Auto Center</Text>
                <Text style={styles.dealershipLocation}>
                  Carpentersville, IL
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="#666" />
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
            marginTop: 10,
          }}
        />

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          navigation.replace('LoginScreen'); // Go to Login
        }}
      >
        <Ionicons name="log-out-outline" size={22} color="#2f95dc" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
