import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
} from 'react-native'
import { Button, Input } from '../../components'

const useLoginFormState = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submit, setSubmit] = useState(false);

    let isUsernameValid = false;
    let isPasswordValid = false;

    if (username === 'example') {
        isUsernameValid = true;
    }

    if (password === 'asdf') {
        isPasswordValid = true;
    }

    return {
        username: {
            value: username,
            set: setUsername,
            valid: isUsernameValid,
        },
        password: {
            value: password,
            set: setPassword,
            valid: isPasswordValid,
        },
        submit: {
            value: submit,
            set: () => setSubmit(true),
        },
    };
};

const LogInScreen = () => {
    const { username, password, submit } = useLoginFormState();
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={25}>
                <Text style={styles.headerText}>Login</Text>
                <Input
                    label="Username"
                    placeholder="example"
                    onChangeText={username.set}
                    error={submit.value && !username.valid}
                />
                <Input
                    label="Password"
                    placeholder="***"
                    secureTextEntry
                    onChangeText={password.set}
                    error={submit.value && !password.valid}
                />
                <Button text="Login" onPress={submit.set} />
            </KeyboardAvoidingView>
        </View>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    headerText: {
        color: '#353031',
        fontWeight: 'bold',
        fontSize: 34,
        marginBottom: 10,
    },
})