import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main_Screen from '../main_screen';
import Goal_Screen from '../goal_screen';
import TogetherScreen from '../TogetherScreen';
import Diary from '../Diary';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TapNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen 
            name="Home" 
            component={Main_Screen} 
            options={{ 
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Goal" 
            component={Goal_Screen} 
            options={{ 
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Together" 
            component={TogetherScreen} 
            options={{ 
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Diary" 
            component={Diary} 
            options={{ 
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
    );
}

export default TapNavigation;