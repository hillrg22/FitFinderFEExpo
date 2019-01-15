import React from 'react';
import {
  Image, Platform, StyleSheet,Text, TouchableOpacity, View, Picker} from 'react-native';
import {Button, Input} from 'react-native-elements'
import { WebBrowser } from 'expo';

class Measurements extends React.Component {
  render() {
    return (
      <View>
        <Text></Text>
        <Input
          placeholder= "Please Input Your Waist Size (in)"
          onChangeText={(text) => {this.props.onInputChange("waistInput", text)}}
          value={this.props.waistInput}
        />
        <Input
          placeholder= "Please Input Your Height (in)"
          onChangeText={(text) => {this.props.onInputChange("heightInput", text)}}
          value= {this.props.heightInput}
        />
        <Input
          placeholder= "Please Input Your Neck Size (in)"
          onChangeText={(text) => {this.props.onInputChange("neckInput", text)}}
          value={this.props.neckInput}
        />
        <Input
          placeholder= "Please Input Your Chest Size (in)"
          onChangeText={(text) => {this.props.onInputChange("chestInput", text)}}
          value={this.props.chestInput}
        />
        <Input
          placeholder= "Please Input Your Inseam Length (in)"
          onChangeText={(text) => {this.props.onInputChange("inseamInput", text)}}
          value={this.props.inseamInput}
        />
        <Input
          placeholder= "Please Input Your Foot Length (cm)"
          onChangeText={(text) => {this.props.onInputChange("footInput", text)}}
          value={this.props.footInput}
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
