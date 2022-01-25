import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';

export default function ListDetails({navigation, route}) {
  const {
    city,
    cluster,
    code,
    id,
    is_live,
    is_registered,
    name,
    space_available,
    type,
  } = route.params.item;
  // console.log(route.params.item);
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(is_live);
  return (
    <ScrollView>
      <Pressable>
        <View style={Styles.details}>
          <Text style={Styles.textContainer}>
            <Text style={Styles.text}>city : </Text>
            <Text style={Styles.textValue}>{city}</Text>
          </Text>
          <Text>
            <Text style={Styles.text}>cluster : </Text>
            <Text style={Styles.textValue}>{cluster}</Text>
          </Text>
          <Text>
            <Text style={Styles.text}>code : </Text>
            <Text style={Styles.textValue}>{code}</Text>
          </Text>
          <Text>
            <Text style={Styles.text}>is_live : </Text>
            <Text style={Styles.textValue}>{String(is_live)}</Text>
          </Text>
          <Text>
            <Text style={Styles.text}>is_registered : </Text>
            <Text style={Styles.textValue}>{String(is_registered)}</Text>
          </Text>
          <Text>
            <Text style={Styles.text}>name : </Text>
            <Text style={Styles.textValue}>{name}</Text>
          </Text>
          <Text>
            <Text style={Styles.text}>space_available : </Text>
            <Text style={Styles.textValue}>{space_available}</Text>
          </Text>
          <Text>
            <Text style={Styles.text}>type : </Text>
            <Text style={Styles.textValue}>{type}</Text>
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  details: {
    backgroundColor: '#EBD4CB',
    width: '90%',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
    padding: 20,
  },
  textContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  textValue: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
    color: 'grey',
    left: 900,
    marginLeft: 9,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
