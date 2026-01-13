import React from 'react';
import { View, Text } from 'react-native';
import { useLinkTo } from '@react-navigation/native'; 
import { Button} from 'react-native-paper';
import { Image } from 'expo-image';


    const LoginScreen = () => {
      const linkTo = useLinkTo();

    const WelcomeImage = require('@/assets/images/onwardedu.png');
    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>Welcome to OnwardEdu</Text>
          <View style={{ marginBottom: 30, alignItems: 'center' }}>
            <Image source={WelcomeImage} style={{width:150, height:150}}/>
          </View>
          <Button icon="login" mode="contained" onPress={() => linkTo('/login')} style={{  marginBottom: 15 }}>
            Login
          </Button>
          <Button icon="account-plus" mode="contained" onPress={() => linkTo('/signup')} style={{  marginBottom: 15 }}>
            Sign Up
          </Button>
        </View>
    );
    };

    export default LoginScreen;