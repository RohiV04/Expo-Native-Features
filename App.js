import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider,initialWindowMetrics } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Share from "./screens/Share";
import BottomTab from "./screens/BottomTab";
import Notifications from "./screens/NotificationAccess";
import Location from "./screens/LocationAccess";
import Contacts from "./screens/ContactsAccess";
const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Share" component={Share} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
