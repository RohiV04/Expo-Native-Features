import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {
    SafeAreaView,
    initialWindowMetrics,
  } from "react-native-safe-area-context";
const SignIn = () => {
  return (
    <SafeAreaView>
    <View>
      <Text>SignIn</Text>
      <Button title="Navigate" />
    </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})