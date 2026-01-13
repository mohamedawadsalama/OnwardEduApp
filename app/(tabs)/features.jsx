import React, { useState, useCallback } from 'react';
import { RefreshControl, ScrollView, View, FlatList } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';


// Sample data with a 'key' or 'id' property
const CoursesDATA = [
  { id: '1', title: 'First Item', content: 'This is the content for the first item', source: require('../../assets/images/1.png') },
  { id: '2', title: 'Second Item', content: 'This is the content for the second item', source: require('../../assets/images/2.png') },
  { id: '3', title: 'Third Item', content: 'This is the content for the third item', source: require('../../assets/images/3.png') },
  // Add more items as needed
];

const VolunteeringDATA = [
  { id: '1', title: 'First Item', content: 'This is the content for the first item', source: require('../../assets/images/4.png') },
  { id: '2', title: 'Second Item', content: 'This is the content for the second item', source: require('../../assets/images/5.png') },
  { id: '3', title: 'Third Item', content: 'This is the content for the third item', source: require('../../assets/images/6.png') },
  // Add more items as needed
];

const JobsDATA = [
  { id: '1', title: 'First Item', content: 'This is the content for the first item', source: require('../../assets/images/7.png') },
  { id: '2', title: 'Second Item', content: 'This is the content for the second item', source: require('../../assets/images/8.png') },
  { id: '3', title: 'Third Item', content: 'This is the content for the third item', source: require('../../assets/images/9.png') },
  // Add more items as needed
];

const InternshipsDATA = [
  { id: '1', title: 'First Item', content: 'This is the content for the first item', source: require('../../assets/images/10.png') },
  { id: '2', title: 'Second Item', content: 'This is the content for the second item', source: require('../../assets/images/11.png') },
  { id: '3', title: 'Third Item', content: 'This is the content for the third item', source: require('../../assets/images/12.png') },
  // Add more items as needed
];

const ResumeBuildingDATA = [
  { id: '1', title: 'First Item', content: 'This is the content for the first item', source: require('../../assets/images/13.png') },
  { id: '2', title: 'Second Item', content: 'This is the content for the second item', source: require('../../assets/images/14.png') },
  { id: '3', title: 'Third Item', content: 'This is the content for the third item', source: require('../../assets/images/15.png') },
  // Add more items as needed
];

// Component to render each individual item
const Item = ({ item }) => (
    <Card style={{margin:10}}>
      <Card.Content>
        <Card.Title title={item.title} />
        <Card.Cover source={item.source} />
        <Card.Content>
          <View>
            <Text style={{marginTop:10}}> {item.content} </Text>
          </View>
        </Card.Content>
      </Card.Content>
    </Card>
  );


// Main component using FlatList
export default function FeaturesTab() {
  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    }>

      <Card style={{margin:20}}>
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
        <Text variant="bodyMedium">Check out Onward Edu Features, your gateway to a world of learning and growth. 
          Explore our diverse courses, 
          expert instructors, and interactive content designed to empower your educational journey. 
          Whether you are looking to upskill, reskill, or pursue a new passion, Onward Edu has the tools 
          and resources to help you succeed. Join us today and unlock your potential!
        </Text>
        </View>
        </Card.Content>
              
      </Card>
            
      <View>
        <Text variant="titleMedium" style={{padding:10, textDecorationLine:'underline', color:'#7f55b1'}}>Courses</Text>
      </View>

      <FlatList style={{margin:10}}
        data={ResumeBuildingDATA} // The data source array
        renderItem={({ item }) => <Item item={item} />} // Renders each item
        keyExtractor={item => item.id} // Extracts a unique key for performance optimization
        horizontal={true} // <--- Key prop to enable horizontal scrolling
      />

      <View>
        <Text variant="titleMedium" style={{padding:10, textDecorationLine:'underline', color:'#7f55b1'}}>Volunteering</Text>
      </View>

      <FlatList style={{margin:10}}
        data={CoursesDATA} // The data source array
        renderItem={({ item }) => <Item item={item} />} // Renders each item
        keyExtractor={item => item.id} // Extracts a unique key for performance optimization
        horizontal={true} // <--- Key prop to enable horizontal scrolling
      />

      <View>
        <Text variant="titleMedium" style={{padding:10, textDecorationLine:'underline', color:'#7f55b1'}}>Jobs</Text>
      </View>

      <FlatList style={{margin:10}}
        data={VolunteeringDATA} // The data source array
        renderItem={({ item }) => <Item item={item} />} // Renders each item
        keyExtractor={item => item.id} // Extracts a unique key for performance optimization
        horizontal={true} // <--- Key prop to enable horizontal scrolling
      />  

      <View>
        <Text variant="titleMedium" style={{padding:10, textDecorationLine:'underline', color:'#7f55b1'}}>Internships</Text>
      </View>

      <FlatList style={{margin:10}}
        data={JobsDATA} // The data source array
        renderItem={({ item }) => <Item item={item} />} // Renders each item
        keyExtractor={item => item.id} // Extracts a unique key for performance optimization
        horizontal={true} // <--- Key prop to enable horizontal scrolling
      /> 

      <View>
        <Text variant="titleMedium" style={{padding:10, textDecorationLine:'underline', color:'#7f55b1'}}>Resume Building</Text>
      </View>

      <FlatList style={{margin:10}}
        data={InternshipsDATA} // The data source array
        renderItem={({ item }) => <Item item={item} />} // Renders each item
        keyExtractor={item => item.id} // Extracts a unique key for performance optimization
        horizontal={true} // <--- Key prop to enable horizontal scrolling
      />  

      <View>
        <Text variant="titleMedium" style={{padding:10, textDecorationLine:'underline', color:'#7f55b1'}}>Certificates</Text>
      </View>

      <FlatList style={{margin:10}}
        data={ResumeBuildingDATA} // The data source array
        renderItem={({ item }) => <Item item={item} />} // Renders each item
        keyExtractor={item => item.id} // Extracts a unique key for performance optimization
        horizontal={true} // <--- Key prop to enable horizontal scrolling
      />  

      <View>
        <Text variant="titleMedium" style={{padding:10, textDecorationLine:'underline', color:'#7f55b1'}}>Career</Text>
      </View>

      <FlatList style={{margin:10}}
        data={ResumeBuildingDATA} // The data source array
        renderItem={({ item }) => <Item item={item} />} // Renders each item
        keyExtractor={item => item.id} // Extracts a unique key for performance optimization
        horizontal={true} // <--- Key prop to enable horizontal scrolling
      />    


      <View style={{ height: 20 }} /> {/* Spacer at the bottom */}

    </ScrollView>
  );
}

