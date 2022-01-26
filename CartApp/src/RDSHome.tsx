import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Cart from './Cart';
import {AppContext, ContextProvider} from './context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Checkout from './Checkout';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const productDetails = [
  {
    id: 1,
    itemName: 'Shirt',
    price: 129.99,
  },
  {
    id: 2,
    itemName: 'Shoes',
    price: 199,
  },
];

export const Main = ({navigation}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [data, setData] = useState(productDetails);
  useEffect(() => {
    console.log(totalPrice);
    console.log(data);
  }, [totalPrice]);
  return (
    <ScrollView>
      <View style={styles.list}>
        <Text style={styles.total}>Total $ : {totalPrice}</Text>
        {data.map(item => {
          return (
            <Cart
              props={item}
              key={item.id}
              setTotalPrice={setTotalPrice}
              totalItem={totalItem}
              setTotalItem={setTotalItem}
            />
          );
        })}
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Checkout', {totalPrice, totalItem});
        }}>
        <Text style={styles.checkout}>Checkout</Text>
      </Pressable>
    </ScrollView>
  );
};

export default function RDSHome({navigation}) {
  return (
    <Stack.Navigator
    // screenOptions={{headerTitleAlign: 'center'}}
    >
      <Stack.Screen
        name="RealDevSquad"
        options={{
          headerBackTitleVisible: false,
        }}
        component={Main}
      />
      {/* <Stack.Screen name="Checkout" component={Checkout} /> */}
    </Stack.Navigator>
  );
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [data, setData] = useState(productDetails);
  // useEffect(() => {
  //   console.log(totalPrice);
  //   console.log(data);
  // }, [totalPrice]);
  // return (
  //   <ScrollView>
  //     <View style={styles.list}>
  //       <Text style={styles.total}>Total $ : {totalPrice}</Text>
  //       {data.map(item => {
  //         return (
  //           <Cart props={item} key={item.id} setTotalPrice={setTotalPrice} />
  //         );
  //       })}
  //     </View>
  //     <Pressable style={styles.btn}>
  //       <Text style={styles.checkout}>Checkout</Text>
  //     </Pressable>
  //   </ScrollView>
  // );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    // alignContent: 'flex-end',
  },
  btn: {
    marginTop: 15,
    width: '40%',
    height: 30,
    borderWidth: 1,
    borderRadius: 30,
    color: 'white',
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  checkout: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
