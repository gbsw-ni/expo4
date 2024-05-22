import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Start = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>더 나은 내일을 위한</Text>
        <Text style={styles.brandText}>Naeil</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginAndSignup')}>
        <Text style={styles.buttonText}>Let's go!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0066FF',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 100
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 100,
    marginBottom: 10
  },
  brandText: {
    color: 'white',
    fontSize: 48,
    marginLeft: 180,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#0066FF',
    fontSize: 20,
    width: 150,
    fontWeight: 'bold',
    textAlign: 'center' // Center the text
  }
})

export default Start
