import React from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function RDSHome({navigation}) {
  return (
    <View>
      <Text>RDS Home screen</Text>
      {/* <Button
        title="Click to go to new Screen"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      /> */}
    </View>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={Profile} />
    //   <Tab.Screen name="Settings" component={Profile} />
    // </Tab.Navigator>
  );
}
