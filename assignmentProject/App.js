/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import List from './src/components/List';
import data from './src/data/warehouse.json';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListDetails from './src/components/ListDetails';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SwipeGesture from './src/components/SomeComponent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppContext} from './src/context';

// console.log(appContextProvider);

const Main = ({navigation}) => {
  // const {data, setData} = useContext(appContext);
  // console.log(data);

  const [listData, setListData] = useState(data);

  const [wareHouseData, setwareHouseData] = useState(data);
  const [searchText, setSearchText] = useState('');
  const searchHandler = e => {
    // console.log(e);
    setSearchText(pre => (pre = e));
  };
  const searchTextSubmit = e => {
    if (searchText === null || searchText.trim() === '') {
      setwareHouseData(data);
    } else {
      setSearchText(searchText);
      setwareHouseData(d => {
        return data.filter(
          item => item.city.toLowerCase() === searchText.toLowerCase(),
        );
      });
    }
  };
  // console.log(listData);
  return (
    <SafeAreaView>
      <AppContext.Provider value={(listData, setListData)}>
        <TextInput
          placeholder="search by city name..."
          style={styles.search}
          onChangeText={searchHandler}
          onSubmitEditing={searchTextSubmit}
        />
        <Text style={styles.listHeading}>Warehouse List</Text>

        {/* <Button
        title="Gesture Page"
        onPress={() => {
          console.log('btn pressed');
          navigation.navigate('GestureExample');
        }}
      /> */}

        <FlatList
          // ItemSeparatorComponent={
          //   Platform.OS !== 'android' &&
          //   (({highlighted}) => (
          //     <View style={[style.separator, highlighted && {marginLeft: 0}]} />
          //   ))
          // }
          data={listData}
          renderItem={({item}) => (
            <List
              item={item}
              navigation={navigation}
              key={item.id}
              city={item.city}
              cluster={item.cluster}
              space_available={item.space_available}
              listData={listData}
              setListData={setListData}
            />
          )}
        />
      </AppContext.Provider>
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name={'HomePage'}
            options={{title: 'Warehouse'}}
            component={Main}
          />
          <Stack.Screen
            name={'detailsPage'}
            options={{title: 'Details'}}
            component={ListDetails}
          />
          <Stack.Screen
            name={'GestureExample'}
            options={{title: 'Gesture'}}
            component={SwipeGesture}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  listHeading: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  listScreen: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  search: {
    marginTop: 5,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    // borderWidth: 1,
    // borderColor: 'black',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#EBD4CB',
    marginBottom: 20,
  },
  noData: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
