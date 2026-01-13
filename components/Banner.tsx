import * as React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';

const TwoColumnLayout = () => (
  <View >
    <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom:20, marginTop:20}}>
      <View >
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Courses</Text>
        </View>
        <Image source={require('../assets/images/1.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View >
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Volunteering</Text>
        </View>
        <Image source={require('../assets/images/2.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between' , marginBottom:20,}}>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Jobs</Text>
        </View>
        <Image source={require('../assets/images/3.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Internships</Text>
        </View>
        <Image source={require('../assets/images/4.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20,}}>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Resume</Text>
        </View>
        <Image source={require('../assets/images/5.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Skills</Text>
        </View>
        <Image source={require('../assets/images/6.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20,}}>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Certificates</Text>
        </View>
        <Image source={require('../assets/images/7.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Career</Text>
        </View>
        <Image source={require('../assets/images/8.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20,}}>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/9.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/10.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20,}}>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/11.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/12.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20,}}>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/13.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/14.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:20,}}>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/15.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
      <View style={{flex:1, padding:10}}>
        <View>
          <Text variant="titleMedium" style={{padding:10, color:'#7f55b1'}}>Experience</Text>
        </View>
        <Image source={require('../assets/images/16.png')} style={{width:150, height:200, borderRadius:10}} />
      </View>
    </View>
  </View>
);



export default TwoColumnLayout;