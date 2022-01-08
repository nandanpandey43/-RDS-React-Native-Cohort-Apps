import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

let maxChar: number = 280;
let str: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore maenexercitation laboris nisi ut aliquip ex ea commodo conteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

const CustomInput: React.FC<{}> = () => {
  const [color, setColor] = useState<string>('black');
  const [value, setValue] = useState<string>(str);
  const [inputBoxStyle, setInputBoxStyle] = useState<object>({
    height: 200,
    borderWidth: 5,
    borderRadius: 10,
    padding: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    fontSize: 18,
  });
  const [charsLeft, setCharsLeft] = useState<object>({
    fontSize: 28,
    paddingTop: 10,
    fontWeight: 'bold',
    color: 'black',
  });

  const handleText = (e: any) => {
    setValue(e);
  };

  useEffect(() => {
    if (value.length > maxChar) {
      setInputBoxStyle({
        ...inputBoxStyle,
        borderColor: 'red',
        backgroundColor: '#ffcccb',
      });
      setCharsLeft({...charsLeft, color: 'red'});
    } else if (value.length >= maxChar - 10 && value.length <= maxChar) {
      setInputBoxStyle({
        ...inputBoxStyle,
        borderColor: 'yellow',
        backgroundColor: '#ffffe0',
      });
      setCharsLeft({...charsLeft, color: '#8B8000'});
    } else {
      setInputBoxStyle({
        ...inputBoxStyle,
        borderColor: 'black',
        backgroundColor: 'white',
      });
      setCharsLeft({...charsLeft, color: 'black'});
    }
  }, [value.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.length}>
        {value.length > maxChar ? maxChar : value.length}/{maxChar}
      </Text>
      <TextInput
        style={inputBoxStyle}
        multiline={true}
        placeholder="Enter your tweet here"
        value={value}
        onChangeText={handleText}
      />
      <Text style={styles.indicator}>
        <Text style={charsLeft}>{maxChar - value.length}</Text>
        <Text style={styles.charsLeft}> chars left</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '90%',
  },
  length: {
    alignSelf: 'flex-end',
    paddingRight: 3,
  },
  indicator: {
    // color:"red",
    // fontSize:18,
    paddingTop: 10,
    // fontWeight: "bold",
    alignSelf: 'center',
  },
  charsLeft: {
    fontSize: 18,
  },
});

export default CustomInput;
