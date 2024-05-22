import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../api/api';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Repassword, setRePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    function validateForm() {
        return email.length > 0 && password.length > 0 && name.length > 0;
    }

    async function ClickSignup() {
        if (!validateForm()) {
            setErrorMessage('모든 칸을 입력 해주세요.');
            return false;
        }

        if (password !== Repassword) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return false;
        }

        try {
            let response = await api.post('/user/signup', {
                username: name,
                email: email,
                password: password,
            });
            if (response.data.success) {
                navigation.navigate('Login');
            } else {
                setErrorMessage(
                    response.data.message
                        ? response.data.message
                        : '서버에서 응답을 받지 못했습니다.',
                );
            }
        } catch (err) {
            console.log(err);
            setErrorMessage('서버에 연결할 수 없습니다.');
        }
    }

    return (
        <View style={styles4.container}>
            <Image style={{ height: 230, width: 220 }} source={require('../path/to/your/logo.png')} />
            <TextInput
                onChangeText={text => setName(text)}
                value={name}
                placeholder="이름"
                style={styles4.input}
            />
            <TextInput
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="이메일 (ex. securite@gmail.com)"
                style={styles4.input}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="비밀번호"
                style={styles4.input}
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={text => setRePassword(text)}
                value={Repassword}
                placeholder="비밀번호 확인"
                style={styles4.input}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={ClickSignup} style={styles4.button}>
                <Text style={styles4.buttonText}>회원가입</Text>
            </TouchableOpacity>
            {errorMessage ? <Text style={styles4.error}>{errorMessage}</Text> : null}
        </View>
    );
}

const styles4 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 45,
        paddingLeft: 10,
        marginBottom: 10,
        width: '80%',
        borderWidth: 1.4,
        borderRadius: 40,
        borderColor: '#A5B1CF',
        margin: 20,
    },
    button: {
        backgroundColor: '#0066ff',
        width: 300,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        margin: 30,
        elevation: 8,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontWeight: '900',
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});

export default SignupPage;