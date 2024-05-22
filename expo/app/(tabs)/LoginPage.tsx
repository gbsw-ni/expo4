import React, { useState } from 'react';
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

const logo = require('../icons/logo1.png');

const LoginPage = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeTextEmail = (text: React.SetStateAction<string>) => {
        setEmail(text);
    };

    const onChangeTextPassword = (text: React.SetStateAction<string>) => {
        setPassword(text);
    };

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={onChangeTextEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={onChangeTextPassword}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Tap')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#0066FF',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default LoginPage;