import React from 'react';
import {
  Image, Platform, StyleSheet,Text, TouchableOpacity, View, Picker, TextInput} from 'react-native';
import {Button, Input} from 'react-native-elements'
import { WebBrowser } from 'expo';

class Measurements extends React.Component {
  render() {
    return (
      <View>
        <TextInput></TextInput>
        <Input
          placeholder= "Please Input Your Waist Size (in)"
          onChange={this.props.onInputChange}
          value={this.props.waistInput}
          className= "waistInput"
          name = "waistInput"
          title= "waistInput"
          type = "number"
          target = "waistInput"
        />
        <Input
          placeholder= "Please Input Your Height (in)"
          onChange={this.props.onInputChange}
          value= {this.props.heightInput}
          className= "heightInput"
        />
        <Input
          placeholder= "Please Input Your Neck Size (in)"
          onChangeText={(text) => this.setState({text})}
          value={this.props.neckInput}
          className= "neckInput"
        />
        <Input
          placeholder= "Please Input Your Chest Size (in)"
          onChangeText={(text) => this.setState({text})}
          value={this.props.chestInput}
          className= "chestInput"
        />
        <Input
          placeholder= "Please Input Your Inseam Length (in)"
          onChangeText={(text) => this.setState({text})}
          value={this.props.inseamInput}
          className= "inseamInput"
        />
        <Input
          placeholder= "Please Input Your Foot Length (cm)"
          onChangeText={(text) => this.setState({text})}
          value={this.props.footInput}
          className= "footInput"
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
