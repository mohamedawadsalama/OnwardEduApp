import React, { useEffect, useState, useCallback } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TwoColumnLayout from '../../components/Banner';
import { Avatar, Card, Text } from 'react-native-paper';

const UserProfile = () => {

const [user, setuser] = useState(null);

useEffect(() => {
        const fetchUsername = async () => {
          const username = await getUsername();
          setuser(username);
        };
        fetchUsername();
      }, []);

const getUsername = async () => {
        try {
          const username = await AsyncStorage.getItem('username');
          return username;
        } catch (error) {
          console.error('Error retrieving username:', error);
          return null;
        }
      };

const [refreshing, setRefreshing] = useState(false);
  
const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);      

const firstletter = user ? user.charAt(0).toUpperCase() : '';


return (
        <ScrollView style={{ padding: 20 }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
            }>
          
          <Avatar.Text size={48} label={firstletter} style={{marginBottom:10}}/>
          <View >
            <Text style={{marginBottom:20}} >Welcome: {user || 'Not available'} to OnwardEdu</Text>
          </View>

          <Card style={{ marginBottom: 5 }}>
              <Card.Title
                  title="ONWARD Edu"
                  subtitle="Potential to Profession"
                  // Use the 'left' prop to display an image
                  left={(props) => (
                  <Avatar.Image 
                      {...props} 
                      source={require('../../assets/images/iconn.png')} // Pass the required image
                  />
                  )}
                  // You can do the same for the 'right' prop if needed
              />
                    
              <Card.Content>
                <View>
                    <Text variant="bodyMedium">
                      ONWARD Edu is an application designed to guide students and fresh graduates as they discover their path, 
                      build strong resumes, and gain real-world skills.
                    </Text>
                </View> 
              </Card.Content>   
          </Card>

          <TwoColumnLayout/>

          <Card style={{ marginBottom: 5 }}>
              <Card.Title
                  title="ONWARD Edu"
                  subtitle="Potential to Profession"
                  // Use the 'left' prop to display an image
                  left={(props) => (
                  <Avatar.Image 
                      {...props} 
                      source={require('../../assets/images/iconn.png')} // Pass the required image
                  />
                  )}
                  // You can do the same for the 'right' prop if needed
              />
                    
              <Card.Content>
                <View>
                    <Text variant="bodyMedium">
                      ONWARD Edu is an application designed to guide students and fresh graduates as they discover their path, 
                      build strong resumes, and gain real-world skills.
                    </Text>
                </View> 
              </Card.Content>   
          </Card>

          <TwoColumnLayout/>

          <Card style={{ marginBottom: 5 }}>
              <Card.Title
                  title="ONWARD Edu"
                  subtitle="Potential to Profession"
                  // Use the 'left' prop to display an image
                  left={(props) => (
                  <Avatar.Image 
                      {...props} 
                      source={require('../../assets/images/iconn.png')} // Pass the required image
                  />
                  )}
                  // You can do the same for the 'right' prop if needed
              />
                    
              <Card.Content>
                <View>
                    <Text variant="bodyMedium">
                      ONWARD Edu is an application designed to guide students and fresh graduates as they discover their path, 
                      build strong resumes, and gain real-world skills.
                    </Text>
                </View> 
              </Card.Content>   
          </Card>

          <TwoColumnLayout/>

          <View style={{height:100}}/> {/* Spacer at the bottom */}
          
        </ScrollView>
      );
    };

    export default UserProfile;