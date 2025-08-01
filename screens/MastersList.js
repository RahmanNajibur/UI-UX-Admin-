// screens/MastersListScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const data = ['University 1', 'University 2', 'University 3', 'University 4'];

export default function MastersList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button & Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Master’s</Text>
      </View>

      {/* List */}
      <View style={styles.listContainer}>
        {data.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {item}
          </Text>
        ))}
      </View>

      {/* Add Floating Button */}
      <TouchableOpacity style={styles.fab}>
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
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    padding: 12,
  },
  listItem: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
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
