import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable';

const Error = ({ display = false }) => {
    const errorRef = useRef<any>(null);

    useEffect(() => {
        console.log('display: ', display)
        if (display)
            errorRef.current.shake(500);
        else
            errorRef.current.bounceOut(500);
    }, [display]);

    const viewStyles = [styles.error, { opacity: 0 }];
    if (display) {
        viewStyles.push({ opacity: 1 });
    }

    return (
        <Animatable.View style={viewStyles} ref={errorRef}>
            <Text style={styles.errorText}>X</Text>
        </Animatable.View>
    );
};

export default Error

const styles = StyleSheet.create({
    error: {
        backgroundColor: '#cc0011',
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
})
