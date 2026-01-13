import * as React from 'react';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';


export default function AboutTab() {
  
const [refreshing, setRefreshing] = useState(false);
  
const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

return (
    <ScrollView style={{ padding: 20 }}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
    />
    }>
    

    <Card style={{ marginBottom: 20 }}>
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
            Our goal is to make it easier for the young generation to grow, apply, and succeed - one step at a time.
          </Text>
          </View>
           
          
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Courses"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/16.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Volunteering"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/10.png')}  />
        <Card.Content>
          <View>
            <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Jobs"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/11.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Internships"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/12.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Resume Building"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/13.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Skills"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/14.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Certificates"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/15.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Career"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/17.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/1.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/2.png')}  />
        <Card.Content>
          <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.</Text>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/3.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/4.png')}  />
        <Card.Content>
          <Text variant="bodyMedium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.</Text>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/5.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/6.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/7.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/8.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
        
    </Card>

    <Card style={{ marginBottom: 20 }}>
        <Card.Title
      title="ONWARD Edu"
      subtitle="Experience"
      // Use the 'left' prop to display an image
      left={(props) => (
        <Avatar.Image 
          {...props} 
          source={require('../../assets/images/iconn.png')} // Pass the required image
        />
      )}
      // You can do the same for the 'right' prop if needed
    />
        <Card.Cover source={require('../../assets/images/9.png')}  />
        <Card.Content>
          <View>
          <Text variant="bodyMedium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi, 
            ipsam veritatis quis ut blanditiis error omnis nesciunt maxime repudiandae.
          </Text>
          </View>
        </Card.Content>
    </Card>

    <View style={{ height: 20 }} /> {/* Spacer at the bottom */}

      
    </ScrollView>
  );
}
