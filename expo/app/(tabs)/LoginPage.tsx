import React, { useState } from 'react';
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
//import { login } from '../api/api.js';  // Import the login function

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

    // const handleLogin = async () => {
    //     try {
    //         const data = await login(email, password);
    //         console.log('Login successful:', data);
    //         navigation.navigate('HomePage');
    //     } catch (error) {
    //         console.error('Login failed:', error);
    //     }
    // };

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
                //onPress={handleLogin}
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
        margin: 5,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    button: {
        width: '100%',
        padding: 15,
        margin: 5,
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
