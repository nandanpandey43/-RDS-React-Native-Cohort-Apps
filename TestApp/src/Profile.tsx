import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Profile({navigation}) {
  console.log('clicked');

  return (
    <View>
      <Text>Profile page</Text>
      <Button
        title="go back from here"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
