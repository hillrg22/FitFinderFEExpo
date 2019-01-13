import React from 'react';
import {
  Image, Platform, StyleSheet,Text, TouchableOpacity, View,Input} from 'react-native';
import {Button} from 'react-native-elements'
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
