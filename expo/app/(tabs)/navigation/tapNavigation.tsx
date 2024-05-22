import Main_Screen from '../main_screen';
import Goal_Screen from '../goal_screen';
import Diary from '../Diary';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TapNavigation = () => {
    return (
        <Tab.Navigator initialRouteName="Home"> 
          <Tab.Screen 
            name="Home" 
            component={Main_Screen} 
            options={{ headerShown: false }}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Icon name="home-outline" color={color} size={size} />
            //   ),
            // }}
          />
          <Tab.Screen 
            name="Goal" 
            component={Goal_Screen} 
            options={{ headerShown: false }}
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Icon name="trophy-outline" color={color} size={size} />
            //   ),
            // }}
          />
          {/* <Tab.Screen 
            name="Commu" 
            component={Goal_Screen} 
            // options={{
            //   tabBarIcon: ({ color, size }) => (
            //     <Icon name="trophy-outline" color={color} size={size} />
            //   ),
            // }}
          /> */}
          <Tab.Screen 
            name="Diary" 
            component={Diary} 
            options={{ headerShown: false }}
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


