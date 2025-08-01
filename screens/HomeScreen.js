
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button,StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Ionicons} from '@expo/vector-icons';

const HomeScreen = () => {

  const navigation = useNavigation()
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate('SendNotification')}>
            <Ionicons name="notifications" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Image source={require('../assets/profile.png')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
      </View>


          {/* Navigation Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UniversityList')}
      >
        <Text style={styles.buttonText}>University List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ManageAccounts')}
      >
        <Text style={styles.buttonText}>Manage Accounts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SendNotification')}
      >
        <Text style={styles.buttonText}>Send Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Seminars')}
      >
        <Text style={styles.buttonText}>Seminars</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UniversityOverview')}
      >
        <Text style={styles.buttonText}>UniversityOverview</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Requirements')}
      >
        <Text style={styles.buttonText}>Requirements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AboutUniversity')}
      >
        <Text style={styles.buttonText}>AboutUniversity</Text>
      </TouchableOpacity>
      
      {/* Updates UniversityOverview,requirements,about University */}
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpdateOVerView')}
      >
        <Text style={styles.buttonText}>UpdateOVerView</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpdateRequirements')}
      >
        <Text style={styles.buttonText}>UpdateRequirements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UpdateAboutUniversity')}
      >
        <Text style={styles.buttonText}>UpdateAboutUniversity</Text>
      </TouchableOpacity>


            {/* Bottom Icon */}
      <View style={styles.bottomIcon}>
          <Image source={require('../assets/community.png')}
          style={styles.communityIcon}
        />
        <Text style={styles.communityText}>Community</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    padding: 20,
    justifyContent: 'flex-start',
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 76,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileIcon: {
    width: 28,
    height: 32,
    marginLeft: 10,
    borderRadius: 16,
  },
  button: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomIcon: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  communityIcon: {
    width: 48,
    height: 48,
  },
  communityText: {
    color: '#fff',
    marginTop: 4,
  },

});

export default HomeScreen;
