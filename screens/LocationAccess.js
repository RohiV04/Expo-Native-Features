import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import * as Location from 'expo-location';

export default function LocationAccess() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  }
 }); 