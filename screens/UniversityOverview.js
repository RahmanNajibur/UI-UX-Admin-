
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function UniversityOverview() {

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
          <Text style={styles.title}>Overview</Text>
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddRequirement')}
        >
          <Text style={styles.buttonText}>Requirement</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddAboutUniversity')}
        >
          <Text style={styles.buttonText}>About University</Text>
        </TouchableOpacity>
      </View>

      {/* Third Part — Form */}
        <View style={styles.card2}>

          <View style={styles.block}>
            <Text style={styles.label}>Degree</Text>
            <Text style={styles.value}>Bachelor of Engineering</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.label}>Course location</Text>
            <Text style={styles.value}>Berlin</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.label}>Teaching language</Text>
            <Text style={styles.bullet}>• English</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.label}>Languages</Text>
            <Text style={styles.value}>The programme is taught in English.</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.label}>Full-time / part-time</Text>
            <Text style={styles.bullet}>• full-time</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.label}>Programme duration</Text>
            <Text style={styles.value}>7 semesters</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.label}>Beginning</Text>
            <Text style={styles.value}>Winter and summer semester</Text>
          </View>
        </View>

        {/* 4th section */}
    <View>
      {/* Title */}
          <View style={styles.block}>
            <Text style={styles.label}>Additional information on beginning, duration and mode of study</Text>
            <Text style={styles.value}>Intake: April & October</Text>
          </View>

        {/* Application deadline */}
        <View style={styles.section}>
          <Text style={styles.label}>Application deadline</Text>
          <Text style={styles.paragraph}>
            Non-EU/EEA applicants: Please apply by 1 February (April intake) or 15 August (October intake). We also
            recommend that you apply early (at least four months before the start of your programme).
          </Text>
          <Text style={styles.paragraph}>
            EU/EEA applicants: Please apply by 1 April (April intake) or 1 October (October intake).
          </Text>
        </View>

        {/* Tuition fees */}
        <View style={styles.section}>
          <Text style={styles.label}>Tuition fees per semester in EUR</Text>
          <Text style={styles.paragraph}>4,800 EUR</Text>
        </View>

        {/* Additional tuition fee information */}
        <View style={styles.section}>
          <Text style={styles.label}>Additional information on tuition fees</Text>
          <Text style={styles.bullet}>• Non-EU/EEA tuition fees: 4,800 EUR per semester</Text>
          <Text style={styles.bullet}>• EU/EEA (including Switzerland, Western Balkans and Ukraine) tuition fees: 690 EUR per month</Text>
          <Text style={styles.paragraph}>
            Please note: The monthly/semester tuition fees remain the same for the entire duration of the study programme.
          </Text>
        </View>
    </View>



      {/* 5th section*/}

    <View>
      
        {/* Title */}
        <Text style={styles.title1}>Joint degree / double degree programme</Text>

        {/* Content */}
        <Text style={styles.contentTitle}>No</Text>

        <Text style={styles.label}>Description/content</Text>
        <Text style={styles.paragraph}>
          Our BEng Applied Mechatronic Systems programme combines mechanical engineering,
          electrical engineering and computer science. Strengthen your technical expertise,
          design solutions for electromechanical systems and hone your soft skills.
        </Text>

        <Text style={styles.paragraph}>
          The Bachelor's programme in Applied Mechatronic Systems at SRH will allow you to gain
          a clear understanding of the relevant disciplines of mechatronics, including mechanical
          engineering, electrical engineering and computer science. Apart from brushing up necessary
          skills in mathematics, physics, and statistics, you will get to deepen your programming,
          intercultural and communication skills.
        </Text>

        <Text style={styles.paragraph}>
          You will be able to design complete solutions for electromechanical systems and learn
          how to implement the associated control systems, e.g., by using microcontrollers. Additionally,
          you will have the opportunity to learn more about exciting emerging fields such as automotive
          mechatronics, robotics, machine learning and smart manufacturing.
        </Text>

        <Text style={styles.paragraph}>
          As a Bachelor of Engineering student, you will learn agile methods, do extensive lab work
          and work on hands-on projects with companies.
        </Text>
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

  /*Third part */
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
  /* 4th section */
 
/* 5th section */
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
/* six th code */
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
