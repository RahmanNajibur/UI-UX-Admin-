
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Requirement() {

  const navigation = useNavigation();

  const fields = [
    'Degree',
    'Course location',
    'Teaching language',
    'Languages',
    'Full-time / part-time',
    'Programme duration',
    'Beginning'
  ];


  
  // Function to handle phone press
  const handlePhonePress = () => {
    Linking.openURL('tel:+493051565020');
  };

  // Function to handle email press
  const handleEmailPress = () => {
    Linking.openURL('mailto:contact@srh-university.com');
  };

  // Function to handle website press
  const handleWebsitePress = () => {
    Linking.openURL('https://www.srh.de/en/');
  };

  // Function to handle source press
  const handleSourcePress = () => {
    Linking.openURL('https://www2.daad.de/deutschland/studienangebote/internationale-programme/en/detail/7801/#tab_overview');
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* First Section */}
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Requirement</Text>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Image source={require('../assets/srh.png')} style={styles.logo} />
        </View>

        <Text style={styles.description}>
          Applied Mechatronic Systems (BEng) {'\n'}SRH Universities. Berlin
        </Text>
      </View>

      {/* Second Card */}
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddOverView')} 
        >
          <Text style={styles.buttonText}>OverView</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Requirement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>About University</Text>
        </TouchableOpacity>
      </View>

      {/* Third Part — Form */}
        <View style={styles.card2}>

          <View style={styles.block}>
            <Text style={styles.label}>Academic admission Requirement</Text>
                  <Text style={styles.bullet}>• General higher education entrance qualification (Abitur) or university of applied sciences entrance qualification (Fachhochschulreife)</Text>
                  <Text style={styles.bullet}>• Applicants with foreign degrees might be eligible for direct entry. This means they don't need a foundation year before starting their Bachelor's.</Text>
                  <Text style={styles.bullet}>• Proof of English language proficiency</Text>
                  <Text style={styles.bullet}>• Curriculum vitae</Text>
                  <Text style={styles.bullet}>• Copy of your passport/ID</Text>
          </View>

          <View style={styles.block}>
               <Text style={styles.label}>Language Requirement</Text>
                  <Text style={styles.bullet}>• TOEFL iBT: 87</Text>
                  <Text style={styles.bullet}>• TOEIC: Listening/Reading: 785, Speaking: 160, Writing: 150</Text>
                  <Text style={styles.bullet}>• IELTS / IELTS Online (Academic): 6.5</Text>
                  <Text style={styles.bullet}>• CAE: Grades A, B, or C </Text>
                  <Text style={styles.bullet}>• CPE: Grades A, B, or C</Text>
                  <Text style={styles.bullet}>• PTE Academic: 59 points </Text>
                  <Text style={styles.bullet}>• Linguaskill: 176 to 184 (CES) – all four skills required</Text>
                  <Text style={styles.bullet}>• B2 First: 173 </Text>
                  <Text style={styles.bullet}>• Duolingo English Test: 110 points </Text>
          </View>
        </View>

    {/* 6th section */}
      <View>
        <View style={styles.contactHeader}>
          <Ionicons name="person-circle" size={50} color="#1abc9c" />
          <Text style={styles.contactTitle}>SRH Universities</Text>
          <Text style={styles.subTitle}>Study Advisor</Text>
        </View>

        {/* Contact Information */}
        <Text style={styles.address}>Sonnenallee 221</Text>
        <Text style={styles.address}>12059 Berlin</Text>

        {/* Buttons for Phone, Email, and Website */}
        <TouchableOpacity style={styles.button1} onPress={handlePhonePress}>
          <Text style={styles.buttonText1}>+49 30515650200</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handleEmailPress}>
          <Text style={styles.buttonText1}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={handleWebsitePress}>
          <Text style={styles.buttonText1}>Course website</Text>
        </TouchableOpacity>

        {/* Source */}
        <View style={styles.sourceSection}>
          <Text style={styles.sourceText}>Source</Text>
          <TouchableOpacity onPress={handleSourcePress}>
            <Text style={styles.sourceLink}>https://www2.daad.de/deutschland/studienangebote/internationale-programme/en/detail/7801/#tab_overview</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: '#1a2d3f',
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  body: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  description: {
    color: 'white',
    fontSize: 19,
    textAlign: 'left',
    marginTop: 20,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 1,
    paddingVertical: 12,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  block: {
    marginBottom: 15,
  },
  label: {
    fontSize: 17,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    padding: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  bullet: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  title1: {
    fontSize: 17,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    padding: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  contentTitle: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#040a0bff',
    marginBottom: 15,
    lineHeight: 22,
  },
  // Contact Header
  contactHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contactTitle: {
    color: '#1abc9c',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#888',
  },
  // Contact Information
  address: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
  // Buttons for Phone, Email, and Website
  button1: {
    backgroundColor: '#1abc9c',
    marginBottom: 10,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText1: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Source Section
  sourceSection: {
    backgroundColor: '#1a2d3f',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sourceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sourceLink: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

