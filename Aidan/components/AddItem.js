import {React, useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return(
    <View style={styles.header}>
      <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange}></TextInput>
          <TouchableOpacity style={[styles.btn, styles.buttonOutline]} onPress={() => addItem(text)}>
              <Text style={styles.btnText}>
              <Ionicons name="add" size={20} color="#0782F9"></Ionicons> <Text style={styles.buttonOutlineText}>Add Item</Text>
              </Text>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
})

export default AddItem;