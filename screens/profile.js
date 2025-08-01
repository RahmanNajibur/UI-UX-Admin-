
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountSetting = () => {
const navigation = useNavigation()
  return(
  <View style={styles.container}>

    <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backbtn}>
    <Ionicons name="arrow-back" size={24} color="#fff"/>
    </TouchableOpacity>

    <View style={styles.centerContent}>
      <Image source={require('../assets/profile.png')}
      />
    </View>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Account Settings</Text>
    </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#2c3e50',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backbtn:{
    marging: 30,
  },
    centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    marginBottom: 30,
  },
  button:{
    marginTop: 55,
    backgroundColor: '#ecf0f1',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
    buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  homebtn:{
    marginTop: 20,
  }
})



export default AccountSetting;
