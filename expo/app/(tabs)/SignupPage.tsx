import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../api/api';
import { useNavigation } from '@react-navigation/native';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // 성공 메시지 상태 추가

    const navigation = useNavigation();

    function validateForm() {
        return email.length > 0 && password.length > 0 && name.length > 0;
    }

    async function clickSignup() {
        setErrorMessage(''); // 이전 에러 메시지 초기화
        setSuccessMessage(''); // 이전 성공 메시지 초기화

        if (!validateForm()) {
            setErrorMessage('모든 칸을 입력 해주세요.');
            return;
        }

        if (password !== rePassword) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await api.post('/user/signup', {
                name: name,
                email: email,
                password: password,
            });
            if (response.data.success) {
                setSuccessMessage('회원가입에 성공했습니다.'); // 성공 메시지 설정
            } else {
                setErrorMessage(
                    response.data.message
                        ? response.data.message
                        : '서버에서 응답을 받지 못했습니다.',
                );
            }
        } catch (err) {
            console.error(err);
            setErrorMessage('서버에 연결할 수 없습니다.');
        }
    }

    return (
        <View style={styles.container}>
            <Image style={{ height: 230, width: 220 }} source={require('../icons/logo1.png')} />
            <TextInput
                onChangeText={text => setName(text)}
                value={name}
                placeholder="이름"
                style={styles.input}
            />
            <TextInput
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="이메일 (ex. securite@gmail.com)"
                style={styles.input}
            />
            <TextInput
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder="비밀번호"
                style={styles.input}
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={text => setRePassword(text)}
                value={rePassword}
                placeholder="비밀번호 확인"
                style={styles.input}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={clickSignup} style={styles.button}>
                <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
            {errorMessage ? (
                <View>
                    <Text style={styles.error}>{errorMessage}</Text>
                </View>
            ) : null}
            {successMessage ? (
                <View>
                    <Text style={styles.success}>{successMessage}</Text>
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
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
    success: { // 성공 메시지 스타일 추가
        color: 'green',
        marginTop: 10,
    },
});

export default SignupPage;
