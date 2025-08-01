import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function RegisteredListScreen() {
  const navigation = useNavigation();
  const [link, setLink] = useState('');
  
  // Example emails list
  const registeredEmails = ['Email1@example.com', 'Email2@example.com', 'Email3@example.com', 'Email4@example.com'];

  const handleSend = () => {
    if (link.trim()) {
      // Handle sending logic
      console.log(`Sending meet link: ${link}`);
      setLink('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Registered List</Text>
      </View>

      {/* Subheading */}
      <Text style={styles.subheading}>Registered Emails</Text>

      {/* Emails List */}
      <View style={styles.listContainer}>
        {registeredEmails.map((email, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {email}
          </Text>
        ))}
      </View>

      {/* Link Input & Send Button */}
      <View style={styles.linkRow}>
        <TextInput
          style={styles.linkInput}
          placeholder="Paste Meet Link Here"
          placeholderTextColor="#999"
          value={link}
          onChangeText={setLink}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#2c3e50', 
    paddingTop: 40, 
    paddingHorizontal: 20 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backButton: {
    marginRight: 15,
  },
  title: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold',
  },
  subheading: { 
    marginTop: 30,
    color: '#fff', 
    fontSize: 16,
  },
  listContainer: {
    marginTop: 15,
    backgroundColor: '#ecf0f1', 
    borderRadius: 5, 
    padding: 12, 

  },
  listItem: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  linkRow: { 
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 480,
  },
  linkInput: { 
    flex: 1, 
    backgroundColor: '#ecf0f1', 
    borderRadius: 5, 
    paddingHorizontal: 10, 
    height: 40, 
    fontSize: 14,
  },
  sendBtn: {
    backgroundColor: '#1abc9c',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  sendText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
});
