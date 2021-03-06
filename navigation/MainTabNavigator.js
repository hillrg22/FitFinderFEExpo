import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import IndividualItemScreen from '../screens/IndividualItemScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-body`
          : 'md-body'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: "#a05000",
    style: {
      backgroundColor: '#205e74'
    }
  }
};

const ShopStack = createStackNavigator({
  Shop: ShopScreen, IndividualItem:IndividualItemScreen
});

ShopStack.navigationOptions = {
  tabBarLabel: 'Shop',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-shirt' : 'md-shirt'}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#a05000",
    style: {
      backgroundColor: '#205e74'
    }
  }
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#a05000",
    style: {
      backgroundColor: '#205e74'
    }
  }
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen, IndividualItem: IndividualItemScreen
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#a05000",
    style: {
      backgroundColor: '#205e74'
    }
  }
};

export default createBottomTabNavigator({

  ShopStack,
  FavoritesStack,
  HomeStack,
  SettingsStack,
});
