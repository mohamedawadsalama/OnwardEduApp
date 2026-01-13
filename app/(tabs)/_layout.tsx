import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';





export default function TabLayout() {
  return (
    
      
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#ebe95c',
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
              ),
              
              
            }}
            
          />
          <Tabs.Screen
            name="about"
            options={{
              title: 'About',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
              ),
            }}
          />
          <Tabs.Screen
            name="features"
            options={{
              title: 'Features',
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons name={focused ? "book-education" :"book-education-outline"} size={24} color={color} />
              ),
            }}
          />
          
          
        </Tabs>
     
    
  );
}
