import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Notifications } from 'expo-notifications';

import * as Permissions from 'expo-permissions';

const Ring = () => {
//   useEffect(() => {
//     registerForPushNotificationsAsync();
//   }, []);
// useEffect(() => {
//   Notifications.setNotificationHandler({});
// }, []);

//   const registerForPushNotificationsAsync = async () => {
//     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//     if (status !== 'granted') {
//       return;
//     }
//     const token = await Notifications.getExpoPushTokenAsync();
//     console.log('Your expo push token:', token);
//   };

//   const handleNotification = (notification) => {
//     console.log('Received notification:', notification);
//   };

//   useEffect(() => {
//     const subscription = Notifications.addNotificationReceivedListener(handleNotification);
//     return () => {
//       subscription.remove();
//     };
//   }, []);

//   const sendNotification = async () => {
//     const notification = {
//       title: 'My notification title',
//       body: 'My notification body',
//       sound: 'default',
//     };
//     await Notifications.presentLocalNotificationAsync(notification);
//   };

  return (
    <View>
      <Text 
      // onPress={sendNotification}
      >
      Send Notification</Text>
    </View>
  );
};

export default Ring;

const styles = StyleSheet.create({});
