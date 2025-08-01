
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UpdateOverView() {
  const fields = [
    'Degree',
    'Course location',
    'Teaching language',
    'Languages',
    'Full-time / part-time',
    'Programme duration',
    'Beginning',
    'Additional information on beginning, duration and mode of study',
    'Application deadline',
    'Tuition fees per semester in EUR',
    'Additional information on tuition fees',
    'Joint degree / double degree programme',
    'Description/content'
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
  const handlePress = () => {
    Linking.openURL('https://www.google.com/maps?q=SRH+University+Heidelberg');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Card Section */}
      <View style={styles.card}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Update Overview</Text>
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
        <TouchableOpacity style={styles.button}>
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
      <View style={styles.formSection}>
        {fields.map((label, index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder={`Enter ${label.toLowerCase()}`}
              placeholderTextColor="#999"
            />
          </View>
        ))}
      </View>




            {/*  
        {/* Fourth part *
        <View>
          {/* Section 1 *
      <Text style={styles.label}>Additional information on beginning, duration and mode of study</Text>
      <View style={styles.placeholderBox} />

      {/* Section 2 *
      <Text style={styles.label}>Application deadline</Text>
      <View style={[styles.placeholderBox, { height: 100 }]} />

      {/* Section 3 *
      <Text style={styles.label}>Tuition fees per semester in EUR</Text>
      <View style={styles.placeholderBox} />

      {/* Section 4 *
      <Text style={styles.label}>Additional information on tuition fees</Text>
      <View style={[styles.placeholderBox, { height: 100 }]} />


        {/* Section: Joint Degree *
      <Text style={styles.label}>Joint degree / double degree programme</Text>
      <View style={styles.placeholderSmall} />

      {/* Section: Description *
      <Text style={styles.label}>Description/content</Text>
      <View style={styles.placeholderLarge} />



    </View>   */}




      {/* 5 th part */}

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
  formSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a2d3f',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    color: '#000',
  },

  /*
  placeholderBox: {
    width: 350,
    height: 40,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    alignSelf: 'center',
  },
  placeholderSmall: {
    width: 350,
    height: 40,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: 'center',
  },
  placeholderLarge: {
    width: 350,
    height: 200,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: 'center',
  }, */



  // 5th section (Contact information and buttons)
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
  address: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 5,
  },
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

  // Source Section (For displaying source link)
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
