import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Form({ submitHandler }) {

    const [getText, setText] = useState("")

    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.item}
                placeholder="New To-Do"
                onChangeText={changeHandler}
            />
            <Button title="Save" onPress={() => submitHandler(getText)} color="red"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginStart: 10,
        marginEnd: 10,
      },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 10,
        borderColor: "#000",
        borderBottomWidth: 1,
    }
})