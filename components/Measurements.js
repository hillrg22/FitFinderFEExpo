import React from 'react';
import {
  Image, Platform, StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import {Button, Input} from 'react-native-elements'
import { WebBrowser } from 'expo';

class Measurements extends React.Component {
  constructor(props){
  super(props)
    this.state={
      height: null,
      waist: null,
      chest: null,
      foot: null,
      }
    }

  render() {
    return (
      <View>
        <Input
          title="Height"
          placeHolder= "Hello"
          onChangeText={(text) => this.setState({text})}
          value= {this.state.height}
        />
        <Input
          title="Waist"
          onChangeText={(text) => this.setState({text})}
          value={this.state.waist}
        />
      </View>
    );
  }
}


export default Measurements
