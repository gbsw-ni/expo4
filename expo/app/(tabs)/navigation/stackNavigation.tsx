import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../start';
import LoginAndSignup from '../LoginAndSignupScreen';
//import SignupPage from './SignupPage';
import LoginPage from '../LoginPage';
import tapNavigation from '../navigation/tapNavigation'


const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

//function MainTabs() {
//  return (
//    <Tab.Navigator>
//      <Tab.Screen name="Home" component={Main_Screen} />
//      <Tab.Screen name="Goal" component={Goal_Screen} />
//    </Tab.Navigator>
//  );
//}

export default function stackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="LoginAndSignup" component={LoginAndSignup} />
        {/*<Stack.Screen name="Signup" component={SignupPage} /> */}
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name="tap" component={tapNavigation} />
        {/*<Stack.Screen name='Home' component={Main_Screen} />*/}
        {/* 필요한 다른 스크린을 여기에 추가 */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

