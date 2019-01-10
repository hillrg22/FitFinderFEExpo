import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';


const SignInStack = createStackNavigator({
  SignIn: SignInScreen
});

const AuthLoadingStack = createStackNavigator({
  AuthLoading: AuthLoadingScreen
})

const SignUpStack = createStackNavigator({
  SignUp: SignUpScreen
})




export default 
