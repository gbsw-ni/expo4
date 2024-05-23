import Main_Screen from '../main_screen';
import Goal_Screen from '../goal_screen';
import TogetherScreen from '../TogetherScreen';
import Diary from '../Diary';
import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TapNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home"> 
          <Tab.Screen 
            name="Home" 
            component={Main_Screen} 
            options={{ headerShown: false, tabBarIcon: ({color, size}) => (
              <Text>홈</Text>
            ),}}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Icon name="home-outline" color={color} size={size} />
            //   ),
            // }}
          />
          <Tab.Screen 
            name="Goal" 
            component={Goal_Screen} 
            options={{ headerShown: false, tabBarIcon: ({color, size}) => (
              <Text>목표</Text>
            ),}}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Icon name="trophy-outline" color={color} size={size} />
            //   ),
            // }}
          />
          <Tab.Screen 
            name="Together" 
            component={TogetherScreen} 
            options={{ headerShown: false, tabBarIcon: ({color, size}) => (
              <Text>공유</Text>
            ),}}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Icon name="trophy-outline" color={color} size={size} />
            //   ),
            // }}
          />
          <Tab.Screen 
            name="Diary" 
            component={Diary} 
            options={{ headerShown: false, tabBarIcon: ({color, size}) => (
              <Text>일기</Text>
            ),}}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Icon name="trophy-outline" color={color} size={size} />
            //   ),
            // }}
          />
          
        </Tab.Navigator>
      );
  }

export default TapNavigation;


