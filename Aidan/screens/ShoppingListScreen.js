import {React, useState, useEffect} from "react";
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import AddItem from "../components/AddItem";
import { onValue, set, ref, remove } from "firebase/database";
import { auth, db } from '../firebase' 
import { uid } from 'uid';

const ShoppingListScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const st = `/${auth.currentUser.uid}`;
        console.log(st)
        // read
        onValue(ref(db, st), (snapshot) => {
          setItems([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((item) => {
              const uuid = item["uuid"]
              const name = item["item"]
              setItems((oldArray) => [...oldArray, {"id":uuid, "text":name}]);
            });
          }
        });
      }
    });
  }, []);
    
  const deleteItem = (id) => {
    setItems(oldItems => {
      return oldItems.filter(item => item.id != id)
    });
    const st = `/${auth.currentUser.uid}/${id}`;
    remove(ref(db, st));

  }

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else {
      const uuid = uid();
      setItems(oldItems => {
        return [{id: uuid, text: text}, ...oldItems]
      })
      const st = `/${auth.currentUser.uid}/${uuid}`;
      set(ref(db, st), {
        item: text,
        uuid: uuid
      });

    }
  }



  return(
    <View style={styles.container}>
      <Header></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({item}) => 
        <ListItem item={item} deleteItem = {deleteItem}></ListItem>
      }></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
})
export default ShoppingListScreen;