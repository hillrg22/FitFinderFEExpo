import React from 'react';
import {
  Image, Platform, StyleSheet,Text, TouchableOpacity, View, Picker} from 'react-native';
import {Button, Input, ThemeProvider} from 'react-native-elements'
import { WebBrowser } from 'expo';

class Measurements extends React.Component {
  render() {
    const theme = {
      Button: {
        titleStyle: {
          color: '#fff',
          backgroundColor: '#7796a2',
          width: '100%',
        }
      },
      Input:{
        placeholderTextColor: '#626262',
        inputStyle:{color: '#626262'},
        }
    }

    return (
      <ThemeProvider theme={theme}>
          <View>
            <Text></Text>
            <Input
              placeholder= "Please Input Your Waist Size (in)"
              onChangeText={(text) => {this.props.onInputChange("waistInput", text)}}
              value={this.props.waistInput}
              style= {{placeholderTextColor:'#fff', inputStyle:{color:'#626262'}}}
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
              style = {styles.buttonContainer}
              title = "Save"
              onPress = {this.props.saveMeasurementsButtonClicked}
            />
          </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    paddingLeft: 100,
    width: '75%',
  },
})

export default Measurements
