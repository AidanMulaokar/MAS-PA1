import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

const Header = () => {
  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return(
    <View style={styles.container}>


      <Text style={styles.text}>Shopping List</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
      height: 50,
      padding: 10,
      backgroundColor: 'darkslateblue'
  },
  text: {
      color: 'darkslateblue',
      fontSize: 23,
      textAlign: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})
export default Header;