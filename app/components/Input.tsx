import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Error } from './index'

const Input = ({ label, error: error, ...props }: any) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>

            <View style={styles.row}>
                <TextInput autoCapitalize="none" style={styles.input} {...props} />

                <Error display={error} />
            </View>
        </View>
    );
};

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#f4f6f8',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputLabel: {
        fontSize: 10,
        color: '#b4b6b8',
    },
    input: {
        color: '#353031',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 3,
        marginRight: 10,
        flex: 1,
    },
})
