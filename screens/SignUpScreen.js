import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,

} from 'react-native';
import { Input, Button, ThemeProvider } from 'react-native-elements'
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: "Please Sign Up"
  };

  render() {
    const theme = {
      Button: {
        titleStyle: {
          color: 'black',
          backgroundColor: '#a05000',
          width: '100%',
        },
        buttonStyle:{
          borderRadius: 5
        },
        containerStyle:{overflow:'hidden', borderRadius:6},
        raised: true,
      },
      Avatar: {
        size: "xlarge",
        rounded: true,
        activeOpacity:0.7,
      },
      Badge: {
        textStyle: { fontSize: 30 },
      },
      Input:{
        placeholderTextColor: '#fff'

      }
    };

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Input placeholder= "Username" />
          <Input placeholder= "Password" />
          <Input placeholder= "Confirm Password" />
          <Button style={styles.button} title="Sign Up!" titleStyle={{ color: "#fff" }}  />
        </View>
      </ThemeProvider>
    );
  }

  signUp = () => {
      this.props.navigation.navigate('HomeScreen');
    };

 }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c4166',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 80
  }
});
