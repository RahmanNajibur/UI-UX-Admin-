
import {View,Text,TouchableOpacity,StyleSheet,FlatList,SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const dummyData = [
  { id: '1', topic: 'Topic:', time: 'Time:', guest: 'Guest:' },
  { id: '2', topic: 'Topic:', time: 'Time:', guest: 'Guest:' },
  { id: '3', topic: 'Topic:', time: 'Time:', guest: 'Guest:' },
];

export default function Seminars() {
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.topic}</Text>
      <Text style={styles.cardText}>{item.time}</Text>
      <Text style={styles.cardText}>{item.guest}</Text>
      <View style={styles.buttonRow}>
        
        {/* Registered List as clickable link */}
        <TouchableOpacity 
          style={styles.linkButton} 
          onPress={() => navigation.navigate('RegisterList')}
        >
          <Text style={styles.linkText}>Registered List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Seminar</Text>
        <View style={{ width: 28 }} /> {/* Empty space to balance menu icon */}
      </View>

      {/* Seminar Cards */}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddSeminar')}
      >
        <Ionicons name="add" size={28} color="#2c3e50" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 30,
    height: 60,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  linkText:{
    color: 'blue',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  textButton: {
    paddingVertical: 4,
  },
  smallText: {
    fontSize: 14,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#7f8c8d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
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
