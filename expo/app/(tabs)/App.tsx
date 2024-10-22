import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DiaryProvider } from './DiaryContent';

import Start from './start';
import LoginAndSignup from './LoginAndSignupScreen';
//import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import TapNavigation from './navigation/tapNavigation'
import Chart_Goal_Screen from './chart_goal_screen';
import Create_Goal_Screen from './create_goal_screen';
import DiaryMemo from './DiaryMemo';
import DiaryCheck from './DiaryCheck';
import Add_Friends_Screen from './Add_Friends_Screen';
import Share_Goal_Screen from './share_goal_screen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DiaryProvider>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginAndSignup" component={LoginAndSignup} options={{ headerShown: false }}/>
        
        <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={SignupPage} options={{ headerShown: false }}/> 
        <Stack.Screen name="Tap" component={TapNavigation} options={{ headerShown: false }}/>
        {/*<Stack.Screen name='Home' component={Main_Screen} />*/}
        <Stack.Screen name="Chart" component={Chart_Goal_Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateGoal" component={Create_Goal_Screen} options={{ headerShown: false }}/>
        {/* 다이어리 화면 */}
        
          {/*<Stack.Screen name="Diary" component={Diary} options={{ headerShown: false }}/>*/}
          <Stack.Screen name="DiaryMemo" component={DiaryMemo} options={{ headerShown: false }}/>
          <Stack.Screen name="DiaryCheck" component={DiaryCheck} options={{ headerShown: false }}/>
          <Stack.Screen name="AddFriend" component={Add_Friends_Screen} options={{ headerShown: false }}/>
          <Stack.Screen name="ShareGoal" component={Share_Goal_Screen} options={{ headerShown: false }}/>
        

      </Stack.Navigator>
      </DiaryProvider>
    </NavigationContainer>
  );
}