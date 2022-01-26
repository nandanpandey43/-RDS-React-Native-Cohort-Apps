import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Cart({props, setTotalPrice, totalItem, setTotalItem}) {
  console.log(props);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTotalItem(count);
  // }, [count]);

  return (
    <View style={styles.cart}>
      <View style={styles.productName}>
        <Text style={styles.product}>{props.itemName}</Text>
      </View>
      <View style={styles.price}>
        <Text>
          <Text style={styles.price}>$ {props.price} </Text>
          {count != 0 ? <Text style={styles.price}>x {count} </Text> : null}
        </Text>
      </View>
      <View style={styles.itemNumber}>
        <Pressable
          style={styles.decrement}
          onPress={() => {
            if (count == 0) {
              return null;
            } else {
              setCount(pre => {
                setTotalPrice(prev => {
                  return prev - props.price;
                });
                setTotalItem(pre => {
                  return pre - 1;
                });
                return pre - 1;
              });
            }
          }}>
          <Text style={styles.plusMinus}>-</Text>
        </Pressable>
        <View style={styles.items}>
          <Text style={styles.plusMinus}>{count}</Text>
        </View>

        <Pressable
          style={styles.increment}
          onPress={() => {
            setCount(pre => {
              setTotalPrice(prev => {
                return prev + props.price;
              });
              setTotalItem(pre => {
                return pre + 1;
              });
              return pre + 1;
            });
            // setIncrement(true);
            // setDecrement(false);
          }}>
          <Text style={styles.plusMinus}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    display: 'flex',
    borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: '#DCDCDC',
    width: '70%',
    height: 250,
    alignItems: 'center',
    alignContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  productName: {
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#FFFF99',
    width: '40%',
    justifyContent: 'center',
    height: '30%',
    alignContent: 'center',
    alignItems: 'center',
    // fontSize: 40,
    // fontWeight: 'bold',
    // color: 'black',
  },
  product: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  itemNumber: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 30,
  },
  decrement: {
    borderWidth: 3,
    height: 50,
    alignItems: 'center',
    width: 50,
    borderRadius: 1000,
  },
  items: {
    borderWidth: 1,
    // borderRadius: 2,
    width: '30%',
    marginRight: 15,
    marginLeft: 15,
    alignItems: 'center',
  },
  increment: {
    borderWidth: 3,
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 1000,
  },
  plusMinus: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
