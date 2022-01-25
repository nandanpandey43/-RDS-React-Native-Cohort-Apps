// 'use strict';

// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

// class SomeComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       myText: "I'm ready to get swiped!",
//       gestureName: 'none',
//       backgroundColor: '#fff',
//     };
//   }

//   onSwipeUp(gestureState) {
//     this.setState({myText: 'You swiped up!'});
//   }

//   onSwipeDown(gestureState) {
//     this.setState({myText: 'You swiped down!'});
//   }

//   onSwipeLeft(gestureState) {
//     this.setState({myText: 'You swiped left!'});
//   }

//   onSwipeRight(gestureState) {
//     this.setState({myText: 'You swiped right!'});
//   }

//   onSwipe(gestureName, gestureState) {
//     const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
//     this.setState({gestureName: gestureName});
//     switch (gestureName) {
//       case SWIPE_UP:
//         this.setState({backgroundColor: 'red'});
//         break;
//       case SWIPE_DOWN:
//         this.setState({backgroundColor: 'green'});
//         break;
//       case SWIPE_LEFT:
//         this.setState({backgroundColor: 'blue'});
//         break;
//       case SWIPE_RIGHT:
//         this.setState({backgroundColor: 'yellow'});
//         break;
//     }
//   }

//   render() {
//     const config = {
//       velocityThreshold: 0.3,
//       directionalOffsetThreshold: 80,
//     };

//     return (
//       <GestureRecognizer
//         onSwipe={(direction, state) => this.onSwipe(direction, state)}
//         onSwipeUp={state => this.onSwipeUp(state)}
//         onSwipeDown={state => this.onSwipeDown(state)}
//         onSwipeLeft={state => this.onSwipeLeft(state)}
//         onSwipeRight={state => this.onSwipeRight(state)}
//         config={config}
//         style={{
//           flex: 1,
//           backgroundColor: this.state.backgroundColor,
//         }}>
//         <Text>{this.state.myText}</Text>
//         <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
//       </GestureRecognizer>
//     );
//   }
// }

// export default SomeComponent;

// import React, {Component} from 'react';
// import {StyleSheet, Text, View, I18nManager, Alert} from 'react-native';

// import {FlatList, RectButton} from 'react-native-gesture-handler';

// import AppleStyleSwipeableRow from './AppleStyleSwipeableRow';
// import GmailStyleSwipeableRow from './GmailStyleSwipeableRow';

// //  To toggle LTR/RTL change to `true`
// I18nManager.allowRTL(false);

// // type DataRow = {
// //   from: string;
// //   when: string;
// //   message: string;
// // };

// const Row = ({item}) => (
//   <RectButton style={styles.rectButton} onPress={() => Alert.alert(item.from)}>
//     <Text style={styles.fromText}>{item.from}</Text>
//     <Text numberOfLines={2} style={styles.messageText}>
//       {item.message}
//     </Text>
//     <Text style={styles.dateText}>{item.when} ❭</Text>
//   </RectButton>
// );

// const SwipeableRow = ({item, index}) => {
//   if (index % 2 === 0) {
//     return (
//       <AppleStyleSwipeableRow>
//         <Row item={item} />
//       </AppleStyleSwipeableRow>
//     );
//   } else {
//     return (
//       <GmailStyleSwipeableRow>
//         <Row item={item} />
//       </GmailStyleSwipeableRow>
//     );
//   }
// };

// export default class Example extends Component {
//   render() {
//     return (
//       <FlatList
//         data={DATA}
//         ItemSeparatorComponent={() => <View style={styles.separator} />}
//         renderItem={({item, index}) => (
//           <SwipeableRow item={item} index={index} />
//         )}
//         keyExtractor={(_item, index) => `message ${index}`}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   rectButton: {
//     flex: 1,
//     height: 80,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     backgroundColor: 'white',
//   },
//   separator: {
//     backgroundColor: 'rgb(200, 199, 204)',
//     height: StyleSheet.hairlineWidth,
//   },
//   fromText: {
//     fontWeight: 'bold',
//     backgroundColor: 'transparent',
//   },
//   messageText: {
//     color: '#999',
//     backgroundColor: 'transparent',
//   },
//   dateText: {
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     right: 20,
//     top: 10,
//     color: '#999',
//     fontWeight: 'bold',
//   },
// });

// const DATA = [
//   {
//     from: "D'Artagnan",
//     when: '3:11 PM',
//     message:
//       'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
//   },
//   {
//     from: 'Aramis',
//     when: '11:46 AM',
//     message:
//       'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
//   },
//   {
//     from: 'Athos',
//     when: '6:06 AM',
//     message:
//       'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
//   },
//   {
//     from: 'Porthos',
//     when: 'Yesterday',
//     message:
//       'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
//   },
//   {
//     from: 'Domestos',
//     when: '2 days ago',
//     message:
//       'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
//   },
//   {
//     from: 'Cardinal Richelieu',
//     when: '2 days ago',
//     message:
//       'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
//   },
//   {
//     from: "D'Artagnan",
//     when: 'Week ago',
//     message:
//       'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
//   },
//   {
//     from: 'Cardinal Richelieu',
//     when: '2 weeks ago',
//     message:
//       'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
//   },
// ];

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const todoList = [
  {id: '1', text: 'Learn JavaScript'},
  {id: '2', text: 'Learn React'},
  {id: '3', text: 'Learn TypeScript'},
];
const Separator = () => <View style={styles.itemSeparator} />;
const LeftSwipeActions = () => {
  return (
    <View
      style={{flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center'}}>
      <Text
        style={{
          color: '#40394a',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        Bookmark
      </Text>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
      <Text
        style={{
          color: '#1b1a17',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        Delete
      </Text>
    </View>
  );
};
const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};
const swipeFromRightOpen = () => {
  alert('Swipe from right');
};
const ListItem = ({text}) => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
    onSwipeableLeftOpen={swipeFromLeftOpen}>
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 24}} style={{fontSize: 20}}>
        {text}
      </Text>
    </View>
  </Swipeable>
);
const SwipeGesture = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Text style={{textAlign: 'center', marginVertical: 20}}>
          Swipe right or left
        </Text>
        <FlatList
          data={todoList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ListItem {...item} />}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
});
export default SwipeGesture;
