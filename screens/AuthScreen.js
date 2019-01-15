import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: "Please Sign In"
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!"/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6a6a8',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
