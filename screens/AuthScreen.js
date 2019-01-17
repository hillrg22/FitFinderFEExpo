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

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: "Please Sign In"
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
        placeholderTextColor: '#fff',
        inputStyle:{color: '#fff'},

      }
    };

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Input placeholder= "Username" />
          <Input placeholder= "Password" secureTextEntry= {true} />
          <Button style={styles.button} title="Sign In!" titleStyle={{ color: "#fff" }} onPress={this.signIn}  />
          <Text style={{color:'#fff'}}>Don't Have An Account?</Text>
          <Button style={styles.button2} title="Sign Up!" titleStyle={{ color: "#fff" }} onPress={this.signUp}  />
        </View>
      </ThemeProvider>
    );
  }


  signUp = () => {
      this.props.navigation.navigate('SignUp');
    };

  signIn = () => {
    this.props.navigation.navigate('Home')
  }

 }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c4166',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 65
  },
  button2: {
    padding: 10,
    paddingLeft: 65,
    paddingRight: 65

  }
});
