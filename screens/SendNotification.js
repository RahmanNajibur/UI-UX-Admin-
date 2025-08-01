

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SendNotification() {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Send Notification</Text>

      <Text style={styles.label}>Massage</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Type your message..."
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />

      <Text style={styles.label}>Whom to Send</Text>
      <View style={styles.dropdownPlaceholder}>
        <Text style={styles.dropdownText}>Please Select</Text>
      </View>

      {['All', 'Admin', 'Users'].map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.radioRow}
          onPress={() => setRecipient(item)}
        >
          <Text style={styles.radioLabel}>{item}</Text>
          <View style={styles.radioOuter}>
            {recipient === item && <View style={styles.radioInner} />}
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3A4F',
    padding: 20,
    paddingTop: 60,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    color: 'white',
    fontSize: 14,
    marginBottom: 5,
  },
  textarea: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    minHeight: 80,
    marginBottom: 20,
  },
  dropdownPlaceholder: {
    backgroundColor: '#C0C5CA',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
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
  sendButton: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginTop: 20,
  },
  sendButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
