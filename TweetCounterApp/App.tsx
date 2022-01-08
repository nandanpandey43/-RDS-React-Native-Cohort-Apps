import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import CustomInput from './src/CustomInput';

const App: React.FC<{}> = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <CustomInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection: 'row',
    // borderColor: 'purple',
    // borderWidth: 2,
    // alignItems:"center"
    // alignContent:"center"
  },
  input: {
    alignItems: 'center',
    marginTop: 32,
    width: '100%',
  },
  // btnStyle: {
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   marginTop: 30
  // },
});

export default App;
