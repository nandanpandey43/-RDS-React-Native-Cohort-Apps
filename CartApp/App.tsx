// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RDSHome, {Main} from './src/RDSHome';
import Profile from './src/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Checkout from './src/Checkout';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RealDevSquad" component={Main} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="RealDevSquad Tab"
          component={Main}
          options={{
            tabBarLabel: 'RealDevSquad',
          }}
        />
        <Tab.Screen
          name="Checkout"
          component={Checkout}
          // options={{tabBarBadge: }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
