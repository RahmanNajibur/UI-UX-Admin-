
import{View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

const MenuScreen = ({ navigation }) => {
  const menuItems = [
    { label: 'Home', route: 'Home' },
    { label: 'University List', route: 'UniversityList' },
    { label: 'Manage Accounts', route: 'ManageAccounts' },
    { label: 'Send Notification', route: 'SendNotification' },
    { label: 'Community', route: 'Seminars' },
    { label: 'Seminars', route: 'Seminars' },
  ];


  return (
    <DrawerContentScrollView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(item.route)}
          style={styles.item}
        >
          <MaterialIcons name="arrow-right" size={20} color="#1abc9c" />
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  title: {
    color: '#ecf0f1',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  text: {
    color: '#ecf0f1',
    fontSize: 16,
    marginLeft: 10,
  },
});


export default MenuScreen;