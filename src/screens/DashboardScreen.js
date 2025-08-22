import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView, 
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
 import { dashboardscreenStyles as styles } from '../styles/styles';  

export default function Dashboard() {
  const navigation = useNavigation();  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
         <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconBoxGray}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={26} color="#333" />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>Carpentersville, IL</Text>
          </View>

          <TouchableOpacity style={styles.iconBoxBlack}>
            <Feather name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

         <View style={styles.yellowSection}>
          <View style={styles.actionCard}>
            <Ionicons name="person-add" size={28} color="#000" />
            <Text style={styles.actionText}>Quick Entry{'\n'}Form</Text>
          </View>

          <View style={styles.actionCard}>
            <Ionicons name="camera" size={28} color="#000" />
            <Text style={styles.actionText}>Scan Driver’s{'\n'}License</Text>
          </View>

          <View style={styles.actionCard}>
            <Ionicons name="card" size={28} color="#000" />
            <Text style={styles.actionText}>Digital Business{'\n'}Card</Text>
          </View>
        </View>

         <View style={styles.performanceHeader}>
          <Text style={styles.performanceTitle}>Today’s Performance</Text>
          <Text style={styles.performanceDate}>Tue, 12 Aug 2025</Text>
        </View>

        <View style={styles.performanceCard}>
          <Text style={styles.performanceSectionTitle}>Appointments</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Set</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={[styles.statNumber, { color: 'green' }]}>18</Text>
              <Text style={styles.statLabel}>Confirmed</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={[styles.statNumber, { color: 'purple' }]}>15</Text>
              <Text style={styles.statLabel}>Showed</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={[styles.statNumber, { color: 'orange' }]}>8</Text>
              <Text style={styles.statLabel}>Sold</Text>
            </View>
          </View>
        </View>

         <View style={styles.card}>
          <Text style={styles.cardTitle}>Showroom Visits</Text>
          <Text style={styles.cardNumber}>31</Text>
          <Text style={styles.cardSubtitle}>Total Visits</Text>
        </View>

         <View style={styles.card}>
          <Text style={styles.cardTitle}>Sales Funnel Progress</Text>

          <View style={styles.rowBetween}>
            <Text style={styles.itemLabel}>Product Presentation</Text>
            <Text style={styles.itemValue}>28</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.itemLabel}>Demonstration Drive</Text>
            <Text style={styles.itemValue}>22</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.itemLabel}>Service Walk</Text>
            <Text style={styles.itemValue}>19</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.itemLabel}>Offer to Purchase</Text>
            <Text style={styles.itemValue}>15</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.itemLabel}>Manager TO</Text>
            <Text style={styles.itemValue}>12</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.rowBetween}>
            <Text style={styles.itemLabel}>Sold/Closing %</Text>
            <Text style={[styles.itemValue, styles.highlightGreen]}>67%</Text>
          </View>

          <View style={styles.rowBetween}>
            <Text style={styles.itemLabel}>Closed Out</Text>
            <Text style={styles.itemValue}>8</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

 