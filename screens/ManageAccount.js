// screens/ManageAccountsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const admins = ['Admin1', 'Admin2', 'Admin3', 'Admin4', 'Admin5'];

export default function ManageAccountsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Drawer */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Manage Accounts</Text>
      </View>

      {/* Subheading */}
      <Text style={styles.subheading}>Admins</Text>

      {/* List */}
      <View style={styles.listContainer}>
        {admins.map((admin, index) => (
  <TouchableOpacity
    key={index}
    onPress={() => navigation.navigate('AdminRoles', { adminName: admin })}
  >
    <Text style={styles.listItem}>{admin}</Text>
  </TouchableOpacity>
))}

      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddAdmin')}
      >
        <Ionicons name="add" size={28} color="#2c3e50" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subheading: {
    color: '#ecf0f1',
    fontSize: 16,
    marginVertical: 10,
  },
  listContainer: {
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    padding: 12,
  },
  listItem: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#ecf0f1',
    padding: 12,
    borderRadius: 28,
    elevation: 4,
  },
});
