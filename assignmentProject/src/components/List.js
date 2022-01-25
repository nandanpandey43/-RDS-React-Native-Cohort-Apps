import React, {useContext} from 'react';
import {View, StyleSheet, I18nManager, Text, Pressable} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
// import {AppContext} from '../context';
import totalData from '../data/warehouse.json';

export default function List({
  city,
  space_available,
  cluster,
  navigation,
  item,
  listData,
  setListData,
}) {
  const handlePress = () => {
    navigation.navigate('detailsPage', {item});
    console.log('clicked');
  };

  const LeftSwipeActions = () => {
    return (
      <View style={styles.archive}>
        <Text
          style={{
            color: 'black',
          }}>
          Archive
        </Text>
      </View>
    );
  };
  const rightSwipeActions = () => {
    return (
      <View style={styles.delete}>
        <Text
          style={{
            color: '#1b1a17',
          }}>
          Delete
        </Text>
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    console.log('Swipe from left');
  };
  const swipeFromRightOpen = e => {
    console.log(e);
    console.log('Swipe from right');
    setListData(pre => {
      console.log('item ', item);
      const deletedData = pre.filter(singleItem => {
        console.log('singleItem ', singleItem);
        return singleItem != item;
      });
      console.log(deletedData);
      return deletedData;
    });
  };

  return (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={swipeFromRightOpen}
      onSwipeableLeftOpen={swipeFromLeftOpen}>
      <Pressable onPress={handlePress}>
        <View style={styles.list}>
          <Text>{city}</Text>
          <Text>{cluster}</Text>
          <Text>{space_available}</Text>
        </View>
      </Pressable>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#EBD4CB',
    borderRadius: 8,
  },
  delete: {
    display: 'flex',
    borderRadius: 8,
    backgroundColor: 'red',
    padding: 5,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  archive: {
    display: 'flex',
    borderRadius: 8,
    backgroundColor: 'green',
    padding: 5,
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
