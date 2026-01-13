import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import axios from 'axios';
import { useLinkTo } from '@react-navigation/native';
import { Dropdown } from 'react-native-paper-dropdown';
//import AsyncStorage from '@react-native-async-storage/async-storage';


export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState(undefined);
  const [country, setCountry] = useState(null);
  const [phone, setPhone] = useState('');
  const [education_level, setEducationLevel] = useState('');
  const [ current_goal, setCurrentGoal ] = useState('');
  const [ career_fields, setCurrentFields ] = useState('');
  const [ skills, setSkills ] = useState('');
  const [ career_development_time, setCareerDevelopment ] = useState('');
  const [ previous_experience, setExperience ] = useState('');
  const [ desired_opportunities, setOpportunities ] = useState('');
  const [ terms_conditions, setTerms ] = useState('');
  


  
const educationLevelOptions = [
        { label: 'Grade 10', value: 'grade 10' },
        { label: 'Grade 11', value: 'grade 11' },
        { label: 'High School Graduate', value: 'high school graduate' },
        { label: 'Year 1 University', value: 'year 1 university' },
        { label: 'Other', value: 'other' },
      ];

const goalOptions = [
        { label: 'internship', value: 'internship' },
        { label: 'build resume', value: 'build resume' },
        { label: 'gainskills', value: 'gainskills' },
        { label: 'explore careers', value: 'explore careers' },
        { label: 'Other', value: 'other' },
      ];

const careerOptions = [
        { label: 'Tech', value: 'Tech' },
        { label: 'Business', value: 'Business' },
        { label: 'Art', value: 'Art' },
        { label: 'Health', value: 'Health' },
        { label: 'Other', value: 'other' },
      ];

const experienceOptions = [
        { label: 'internship', value: 'internship' },
        { label: 'volunteer', value: 'volunteer' },
        { label: 'part-time', value: 'part-time' },
        { label: 'full-time', value: 'full-time' },
        { label: 'Other', value: 'other' },
      ];

const careerDevelopmentTimeOptions = [
        { label: '1 Day', value: '1 Day' },
        { label: '2 Days', value: '2 Days' },
        { label: '3 Days', value: '3 Days' },
        { label: '4 Days', value: '4 Days' },
        { label: '5 Days', value: '5 Days' },
        { label: '6 Days', value: '6 Days' },
        { label: '7 Days', value: '7 Days' },
      ];

const opportunitiesOptions = [
        { label: 'Paid internship', value: 'Paid internship' },
        { label: 'remote', value: 'remote' },
        { label: 'volunteer', value: 'volunteer' },
        { label: 'part-time', value: 'part-time' },
        { label: 'Other', value: 'other' },
      ];

const termsOptions = [
        { label: 'Agree', value: 'Agree' },
        { label: 'Disagree', value: 'Disagree' },
      ];     

  // link to Function
  const linkTo = useLinkTo();

const handleSubmit = async () => {

  // profile piture trial
    // Create a FormData object to hold the form data
    
    // Format the date to YYYY-MM-DD
    const date_of_birth = dob ? dob.toISOString().split('T')[0] : null;
    

    try {
      const response = await axios.post('https://mohamedsalama87.pythonanywhere.com/auth/users/', {
        email,
        username,
        first_name,
        last_name,
        password,
        date_of_birth,
        phone,
        country,
        education_level,
        current_goal,
        career_fields,
        skills,
        career_development_time,
        previous_experience,
        desired_opportunities,
        terms_conditions,
        
        
    });
      console.log('Success:', response.data);
        linkTo('/login');
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  const [secureTextEntry1, setSecureTextEntry1] = useState(true);

  

  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        mode="outlined"
        label="Username"
        style={{ marginBottom: 10 }}
        placeholder="Enter Your Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        mode="outlined"
        label="First Name" 
        style={{ marginBottom: 10 }}
        placeholder="Enter Your First Name"
        value={first_name}
        onChangeText={setFirstName}
      />
      <TextInput
        mode="outlined"
        label="Last Name" 
        style={{ marginBottom: 10 }}
        placeholder="Enter Your Last Name"
        value={last_name}
        onChangeText={setLastName}
      />
      <TextInput
        mode="outlined"
        label="Password"
        style={{ marginBottom: 10 }}
        placeholder="Enter Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={secureTextEntry1}
        right={
                <TextInput.Icon 
                    icon={secureTextEntry1 ? 'eye-off' : 'eye'} // Change icon based on visibility
                    onPress={() => setSecureTextEntry1(!secureTextEntry1)} // Toggle visibility on press
                />
                }
      />
      <DatePickerInput
        mode="outlined"
        locale="en"
        label="Date of Birth"
        value={dob}
        onChange={(d) => setDob(d)}
        inputMode="start"
        style={{ marginBottom: 10 }}
      />
     <Text>Selected: {dob ? dob.toDateString() : 'No date selected'}</Text>

     <TextInput
      mode="outlined"
      label="Phone Number"
      style={{ marginBottom: 10 }}
      onChangeText={setPhone}
      value={phone}
      placeholder="Enter phone number (e.g., +1234567890)"
      keyboardType="phone-pad"
    />

    <TextInput
        mode="outlined"
        label="Country" 
        style={{ marginBottom: 10 }}
        placeholder="Enter Your Country"
        value={country}
        onChangeText={setCountry}
      />

    <Dropdown
          mode="outlined"
          label="Education Level"
          placeholder="Choose you Education Level"
          value={education_level}
          onSelect={setEducationLevel} // Callback to update the selected value
          options={educationLevelOptions} // Array of options {label, value}
          style={{ marginBottom: 10 }}
        />
    <Dropdown
          mode="outlined"
          label="Education Level"
          placeholder="Choose you Education Level"
          value={current_goal}
          onSelect={setCurrentGoal} // Callback to update the selected value
          options={goalOptions} // Array of options {label, value}
          style={{ marginBottom: 10 }}
        />
    
    <Dropdown
          mode="outlined"
          label="Career Field"
          placeholder="Choose your Career Field"
          value={career_fields}
          onSelect={setCurrentFields} // Callback to update the selected value
          options={careerOptions} // Array of options {label, value}
          style={{ marginBottom: 10 }}
        />
    
    <TextInput
          mode="outlined"
          label="Skills"
          style={{ marginBottom: 10 }}
          placeholder="Enter Your Skills"
          value={skills}
          onChangeText={setSkills}
        />
    
    <Dropdown
          mode="outlined"
          label="Career Development Time / Week"
          placeholder="How much time can you dedicate per week to career development?"
          value={career_development_time}
          onSelect={setCareerDevelopment} // Callback to update the selected value
          options={careerDevelopmentTimeOptions} // Array of options {label, value}
          style={{ marginBottom: 10 }}
        />
    
    <Dropdown
          mode="outlined"
          label="Previous Experience"
          placeholder="Choose your Previous Experience"
          value={previous_experience}
          onSelect={setExperience} // Callback to update the selected value
          options={experienceOptions} // Array of options {label, value}
          style={{ marginBottom: 10 }}
        />
              
    <Dropdown
          mode="outlined"
          label="Desired Opportunities"
          placeholder="Choose your Desired Opportunities"
          value={desired_opportunities}
          onSelect={setOpportunities} // Callback to update the selected value
          options={opportunitiesOptions} // Array of options {label, value}
          style={{ marginBottom: 10 }}
        />
    
    
    <Dropdown
          mode="outlined"
          label="Terms and Conditions"
          placeholder="Aceept our Terms and Conditions"
          value={terms_conditions}
          onSelect={setTerms} // Callback to update the selected value
          options={termsOptions} // Array of options {label, value}
          style={{ marginBottom: 10 }}
        />
      
     <Text style={{textAlign:'center', marginBottom:10}}>By Clicking SignUp you agree our terms of conditions and privacy policy.</Text>

     <Button title="Sign Up" mode="contained" onPress={handleSubmit} style={{ marginBottom: 10 }}> SignUp </Button>
     <Button mode="contained-tonal" onPress={() => linkTo('/login')} style={{ marginBottom: 10 }}>
                                  Already A Member? Click Here
     </Button>

     <View style={{height:100}}/> {/* Spacer at the bottom */}
      
    </ScrollView>
  );
};


