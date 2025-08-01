
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AddAdmin() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = ['Moderator (Community)', 'Admin (Full Access)', 'User'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Admin</Text>
      </View>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        placeholderTextColor="#888"
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter password"
        secureTextEntry
        placeholderTextColor="#888"
      />

      {/* Role */}
      <Text style={styles.label}>Roles</Text>
      <View style={styles.dropdownPlaceholder}>
        <Text style={styles.dropdownText}>Please select</Text>
      </View>

      {roles.map((role, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioRow}
          onPress={() => setSelectedRole(role)}
        >
          <Text style={styles.radioLabel}>{role}</Text>
          <View style={styles.radioOuter}>
            {selectedRole === role && <View style={styles.radioInner} />}
          </View>
        </TouchableOpacity>
      ))}

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3A4F',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    color: '#000',
  },
  dropdownPlaceholder: {
    backgroundColor: '#C0C5CA',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    marginTop: 5,
  },
  dropdownText: {
    color: '#888',
    fontSize: 14,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EEE',
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
  },
  radioLabel: {
    fontSize: 16,
    color: '#222',
  },
  radioOuter: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  addButton: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginTop: 20,
  },
  addButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
