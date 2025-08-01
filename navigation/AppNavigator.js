
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import MenuScreen from '../components/MenuScreen';

// Drawer 
import HomeScreen from '../screens/HomeScreen';
import UniversityList from '../screens/UniversityList';
import ManageAccounts from '../screens/ManageAccount';
import SendNotification from '../screens/SendNotification';
import Seminars from '../screens/Seminars';
// stack
import profile from '../screens/profile';
import AdminRolesScreen from '../screens/AdminRolesScreen';
import BachelorList from '../screens/BachelorList';
import MastersList from '../screens/MastersList';
import AdminDetails from '../screens/AdminDetails';
import AddAdmin from '../screens/AddAdmin';
import AddSeminar from '../screens/AddSeminar'
import RegisteredList from '../screens/RegisteredList'
import UniversityOverview from '../screens/UniversityOverview'
import Requirements from '../screens/Requirements'
import AboutUniversity from '../screens/AboutUniversity'
import AddOverView from '../screens/AddOverView'
import AddRequirement from '../screens/AddRequirement'
import AddAboutUniversity from '../screens/AddAboutUniversity'
import UpdateOVerView from '../screens/UpdateOVerView'
import UpdateRequirements from '../screens/UpdateRequirements'
import UpdateAboutUniversity from '../screens/UpdateAboutUniversity'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes(){
  return(
    <Drawer.Navigator
    drawerContent={(props)=><MenuScreen {...props}/>}
    screenOptions={{headerShown: false}}
  >
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="MenuScreen" component={MenuScreen}/>
    <Drawer.Screen name="UniversityList" component={UniversityList} />
    <Drawer.Screen name="ManageAccounts" component={ManageAccounts} />
    <Drawer.Screen name="SendNotification" component={SendNotification} />
    <Drawer.Screen name="Seminars" component={Seminars} />
    </Drawer.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={DrawerRoutes}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="AdminRoles" component={AdminRolesScreen} />
      <Stack.Screen name="profile" component={profile} />
      <Stack.Screen name="SendNotification" component={SendNotification} />
      <Stack.Screen name="BachelorList" component={BachelorList} />
      <Stack.Screen name="MastersList" component={MastersList} />
      <Stack.Screen name="AdminDetails" component={AdminDetails} />
      <Stack.Screen name="AddAdmin" component={AddAdmin} />
      <Stack.Screen name="AddSeminar" component={AddSeminar} />
      <Stack.Screen name="RegisterList" component={RegisteredList} />
      <Stack.Screen name="UniversityOverview" component={UniversityOverview} />
      <Stack.Screen name="Requirements" component={Requirements} />
      <Stack.Screen name="AboutUniversity" component={AboutUniversity} />
      <Stack.Screen name="AddOverView" component={AddOverView} />
      <Stack.Screen name="AddRequirement" component={AddRequirement} />
      <Stack.Screen name="AddAboutUniversity" component={AddAboutUniversity} />
      <Stack.Screen name="UpdateOVerView" component={UpdateOVerView} />
      <Stack.Screen name="UpdateRequirements" component={UpdateRequirements} />
      <Stack.Screen name="UpdateAboutUniversity" component={UpdateAboutUniversity} />
    </Stack.Navigator>
  );
}

