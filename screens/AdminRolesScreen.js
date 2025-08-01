import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AdminRoles() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Please select');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  
  const roles = ['Please select', 'Moderator (Community)', 'Admin (Full Access)', 'User'];

  const handleSelectRole = (role) => {
    setSelectedRole(role);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Admin</Text>
      </View>

      {/* Role Dropdown */}
      <Text style={styles.label}>Roles</Text>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={toggleDropdown}
      >
        <Text style={styles.dropdownText}>{selectedRole}</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      {/* Dropdown */}
      {dropdownVisible && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={dropdownVisible}
          onRequestClose={toggleDropdown}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={toggleDropdown}>
            <View style={styles.modalContainer}>
              <FlatList
                data={roles}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleSelectRole(item)}
                  >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                    <Ionicons
                      name={
                        selectedRole === item
                          ? 'radio-button-on'
                          : 'radio-button-off'
                      }
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      {/* Save Change Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Save Change</Text>
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

  // Dropdown styles
  dropdownButton: {
    backgroundColor: '#ecf0f1',
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 8,
    padding: 20,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },

  // Add Button styles
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
