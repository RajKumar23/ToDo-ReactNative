import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import ToDoItems from "./components/ToDoItems"
import Form from "./components/Form"

export default function App() {
  const [getToDo, setToDo] = useState([
    { text: "Read quotes", id: 1 },
    { text: "Have a sleep at 10:00 PM", id: 2 },
    { text: "Charge the headphones", id: 3 }
  ])

  const pressHandler = (key) => {
    setToDo((prevToDos) => {
      return prevToDos.filter(toDos => toDos.id != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDo((prevToDos) => {
        return [
          { text: text, id: Math.random() },
          ...prevToDos
        ]
      })
    } else {
      Alert.alert(
        title = "Oops!",
        message = "Todo must be greater than 3 chars",
        buttons = [{ text: "Understood", onPress: () => { console.log("Alert closed") } }]
      )
    }

  }

  return (
    <TouchableWithoutFeedback onPress = {() =>
      Keyboard.dismiss()
    }>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={getToDo}
              renderItem={({ item }) => (
                <ToDoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 5
  },
  list: {
    flex: 1,
    padding: 5,
    marginTop: 5
  }
});
