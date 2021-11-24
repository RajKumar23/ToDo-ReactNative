import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My To-Do</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        height: 80,
        paddingTop: 35
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
})