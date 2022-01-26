import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function Checkout({navigation, route}) {
  console.log(route.params.totalItem);
  return (
    <View style={styles.container}>
      <View style={styles.totalItem}>
        <Text style={styles.text}>{route.params.totalItem} Items</Text>
      </View>
      <View style={styles.totalPrice}>
        <Text style={styles.text}>
          Total Price $ : {route.params.totalPrice}{' '}
        </Text>
      </View>
      <Pressable
        style={styles.goBack}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
  },
  totalItem: {
    borderWidth: 1,
    borderRadius: 6,
    width: '60%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalPrice: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 6,
    width: 'auto',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: 'flex-end',
    width: '20%',
    height: 30,
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  text: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
