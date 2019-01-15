import React from 'react';
import {
  Image, Platform, StyleSheet,Text, TouchableOpacity, View, Picker} from 'react-native';
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
          placeholder= "Please Input Your Waist Size (in)"
          onChangeText={(text) => this.setState({text})}
          value={this.state.waist}
        />
        <Input
          placeholder= "Please Input Your Height (in)"
          onChangeText={(text) => this.setState({text})}
          value= {this.state.height}
        />
        <Input
          placeholder= "Please Input Your Chest Size (in)"
          onChangeText={(text) => this.setState({text})}
          value={this.state.waist}
        />
        <Input
          placeholder= "Please Input Your Foot Length (cm)"
          onChangeText={(text) => this.setState({text})}
          value={this.state.waist}
        />
        <Button
          title = "Save"
          onPress = {this.props.saveMeasurementsButtonClicked}
        />
      </View>
    );
  }
}


export default Measurements
