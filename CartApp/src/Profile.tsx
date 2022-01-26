import React from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from './Cart';
import Checkout from './Checkout';
const Stack = createNativeStackNavigator();

export default function Profile({navigation: any}) {
  console.log('clicked');

  return (
    <Stack.Navigator>
      <Stack.Screen name="NestedScreen2" component={Checkout} />
      <Stack.Screen name="Screen2" component={Checkout} />
    </Stack.Navigator>
  );
}
