import React from 'react';
import {
  Image, Platform, StyleSheet,Text, TouchableOpacity, View, Picker} from 'react-native';
import {Button, Input,} from 'react-native-elements'
import { WebBrowser } from 'expo';

class MeasurementsSaved extends React.Component {
  render() {
    return (
        <View>
          <Text style={styles.measurementsText}>Waist: {this.props.waistInput} </Text>
          <Text style={styles.measurementsText}>Height: {this.props.heightInput} </Text>
          <Text style={styles.measurementsText}>Neck: {this.props.neckInput} </Text>
          <Text style={styles.measurementsText}>Chest: {this.props.chestInput} </Text>
          <Text style={styles.measurementsText}>Inseam: {this.props.inseamInput} </Text>
          <Text style={styles.measurementsText}>Foot: {this.props.footInput} </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    paddingLeft: 100,
    width: '75%',
  },
  measurementsText: {
    color: '#626262',
    fontSize: 25,
    paddingLeft: 10,
  }
})

export default MeasurementsSaved
