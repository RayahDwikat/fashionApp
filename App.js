 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationContainer from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding';
import LoadAssets from './src/components';

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator =()=> {
  return(
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={onboarding}></AuthenticationStack.Screen>
  </AuthenticationStack.Navigator>

);  
};
  
export default function App() {
  return (
    <LoadAssets>
      <AuthenticationNavigator/>
    </LoadAssets>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
