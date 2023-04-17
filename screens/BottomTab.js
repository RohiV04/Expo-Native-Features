import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Contacts from './ContactsAccess';
import Camera from './Share';
import Notifications from './NotificationAccess';
import Location from './LocationAccess';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Camera"
      activeColor="#e91e63"
      inactiveColor="###"
      barStyle="black"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'black' }}
    >
    <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: 'Share',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="share" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
  
}

export default BottomTab;