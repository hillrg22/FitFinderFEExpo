import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';


import AuthScreen from '../screens/AuthScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AuthStack = createStackNavigator({ Auth: AuthScreen, SignUp: SignUpScreen});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,

    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
