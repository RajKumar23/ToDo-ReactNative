import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItems({ item, pressHandler }) {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.text}>{item.text}</Text>
                <MaterialIcons name="delete" size={24} color="#333" onPress={() => pressHandler(item.id)}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        alignItems:"center",
        flexDirection: "row",
        padding: 10,
        margin: 10,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 5
    },
    text : {
        flex : 1,
        marginEnd: 10
    }
})
