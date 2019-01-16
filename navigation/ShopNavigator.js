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



import ShopScreen from '../screens/ShopScreen'
import IndividualItemScreen from '../screens/IndividualItemScreen'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const ShopStack = createStackNavigator({ Shop: ShopScreen, IndividualItem: IndividualItemScreen});

export default createAppContainer(createSwitchNavigator(
  {
    Shop: ShopStack
  },
));
