import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
const logo = require('../icons/logo1.png');

function LoginAndSignupScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={{ height: 230, width: 220 }} source={logo} />
      <Text style={styles2.LoginAndSignuptitle}>Naeil</Text>

      <TouchableOpacity 
        style={styles2.Login}
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles2.buttonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles2.Signup}
        onPress={() => navigation.navigate('Signup')} 
      >
        <Text style={styles2.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles2 = StyleSheet.create({
  LoginAndSignuptitle: {
    color: '#000000',
    //fontFamily: 'ArialMT',
    fontSize: 35,
    marginBottom: 20,
  },
  Login: {
    backgroundColor: '#0066ff',
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 30,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  Signup: {
    backgroundColor: '#0066ff',
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation: 8,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '900',
  },
});

export default LoginAndSignupScreen;