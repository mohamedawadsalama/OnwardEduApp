import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLinkTo } from '@react-navigation/native'; 
import { TextInput, Button} from 'react-native-paper';





    const API_URL = 'https://mohamedsalama87.pythonanywhere.com/auth/jwt/create/'; // Replace with your Django backend URL

    const LoginScreen = ({ navigation }) => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      
      //const navigations = useNavigation();
      const linkTo = useLinkTo();

      const handleLogin = async () => {
        try {
          const response = await axios.post(`${API_URL}`, {
            username,
            password,
          });
          const { access, refresh } = response.data;
          await AsyncStorage.setItem('accessToken', access);
          await AsyncStorage.setItem('refreshToken', refresh);
          await AsyncStorage.setItem('username', username);
          
          

          
          Alert.alert( 'Logged in successfully!');
          linkTo('/home');
          //navigations.navigate('/home'); 
          console.log('Login successful:', response.data, username);
          setUsername('');
          setPassword('');
          
        } catch (error) {
          console.error('Login error:', error);
          Alert.alert('Error', 'Invalid credentials');
        }
      };

      

      const [secureTextEntry, setSecureTextEntry] = useState(true); 

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Login</Text>
          <TextInput mode="outlined" placeholder="Type your Username" label="Username" value={username} onChangeText={setUsername}  style={{ marginBottom: 10 }}/>
          <TextInput mode="outlined" placeholder="Type your Password" label="Password" value={password} onChangeText={setPassword} style={{ marginBottom: 10 }} secureTextEntry={secureTextEntry}
          right={
            <TextInput.Icon 
              icon={secureTextEntry ? 'eye-off' : 'eye'} // Change icon based on visibility
              onPress={() => setSecureTextEntry(!secureTextEntry)} // Toggle visibility on press
            />
          }/>
          <Button title="Login" mode="contained" onPress={handleLogin} style={{ marginBottom: 10 }}> Login </Button>
          
          
          <Button mode="contained-tonal" onPress={() => linkTo('/signup')} style={{ marginBottom: 10 }}>
            New Here? Click Here
          </Button>
          
        </View>
      );
    };

export default LoginScreen;