import React, { useState } from 'react';
import { ScrollView, Text, Image, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
//import axios from 'axios';
import { useLinkTo } from '@react-navigation/native';
import { Dropdown } from 'react-native-paper-dropdown';
import { launchImageLibrary } from 'react-native-image-picker';
//import PhoneInput from 'react-native-international-phone-number';

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
  const [ profile_picture, setProfilePicture ] = useState(null);

const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                // Get the first asset from the response
                const asset = response.assets[0];
                setProfilePicture(asset);
            }
        });
    };

  
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

  
    
    // Format the date to YYYY-MM-DD
    const date_of_birth = dob ? dob.toISOString().split('T')[0] : null;

// profile picture trial
// Create a FormData object to hold the form data
const formData = new FormData();
formData.append('email', email);
formData.append('username', username);
formData.append('first_name', first_name);
formData.append('last_name', last_name);
formData.append('password', password);
formData.append('date_of_birth', date_of_birth);
formData.append('phone', phone);
formData.append('country', country);
formData.append('education_level', education_level);
formData.append('current_goal', current_goal);
formData.append('career_fields', career_fields);
formData.append('skills', skills);
formData.append('career_development_time', career_development_time);
formData.append('previous_experience', previous_experience);
formData.append('desired_opportunities', desired_opportunities);
formData.append('terms_conditions', terms_conditions);

if (profile_picture) {
    formData.append('profile_picture', {
        uri: profile_picture.uri,
        name: profile_picture.fileName || 'profile_pic.jpg',
        type: profile_picture.type || 'image/jpeg',
    });
}

try {
      const response = await fetch('http://127.0.0.1:8000/auth/users/', { // Replace with your URL
                method: 'POST',
                body: formData,
                // Do NOT manually set Content-Type to multipart/form-data. 
                // The browser/React Native will set it automatically with the correct boundary.
            });

      if (response.ok) {
                const data = await response.json();
                Alert.alert('Success', 'User created successfully!');
                console.log(data);
                linkTo('/login');

            } else {
                const errorData = await response.json();
                Alert.alert('Error', 'Something went wrong.');
                console.log(errorData);
            }
        } catch (error) {
            console.error('Network error:', error);
            Alert.alert('Error', 'Network request failed.');
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
    <Button title="choose a photo" mode="contained" onPress={selectImage} />
            {profile_picture && (
                <Image source={{ uri: profile_picture.uri }} style={{ width: 100, height: 100, marginTop: 10 }} />
            )}
    
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
      
    </ScrollView>
  );
};



