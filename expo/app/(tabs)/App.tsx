import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './start';
import LoginAndSignup from './LoginAndSignupScreen';
//import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import TapNavigation from './navigation/tapNavigation'
import Chart_Goal_Screen from './chart_goal_screen';
import Create_Goal_Screen from './create_goal_screen';
import DiaryMemo from './DiaryMemo';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginAndSignup" component={LoginAndSignup} options={{ headerShown: false }}/>
        {/*<Stack.Screen name="Signup" component={SignupPage} /> */}
        <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Tap" component={TapNavigation} options={{ headerShown: false }}/>
        {/*<Stack.Screen name='Home' component={Main_Screen} />*/}
        {/* 필요한 다른 스크린을 여기에 추가 */}
        <Stack.Screen name="Chart" component={Chart_Goal_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateGoal" component={Create_Goal_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="DiaryMemo" component={DiaryMemo} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

