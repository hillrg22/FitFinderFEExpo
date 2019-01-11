import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    title: 'Shop',
    headerStyle: {
      backgroundColor: '#8e2727',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 21,
    },
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor:'#a6a6a8',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
