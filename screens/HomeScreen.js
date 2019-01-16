import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import {Button, ThemeProvider, Avatar} from 'react-native-elements'
import {Icon} from 'react-native-vector-icons/FontAwesome'
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import Measurements from '../components/Measurements';

console.disableYellowBox = true
export default class HomeScreen extends React.Component {
  constructor(props){
  super(props)
    this.state={
      measurementsClicked:false,
      userInfo:{} ,
      heightInput: null,
      waistInput: null,
      chestInput: null,
      inseamInput: null,
      footInput: null,
      neckInput: null,
    }
  }

  static navigationOptions = {
    title: 'My Profile',
    headerStyle: {
      backgroundColor: '#1c4166',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 21,
    },
  };

  onLogOut = (e) =>{
    console.log("Logging Out")
  }

  editProfileInputs = (e) => {
    console.log("edit inputs")

  }

  onInputChange = (key,value) => {
    // this.setState({[key]: value} )
    console.log( this)
    //set state to
  }

  measurementsButtonClicked = (e) => {
    this.setState({measurementsClicked: !this.state.measurementsClicked})
  }

  saveMeasurementsButtonClicked = (e) => {
    this.setState({measurementsClicked: !this.state.measurementsClicked})

    fetch('http://localhost:3000/users', {
      method: 'PUT',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
          height_in: this.state.heightInput,
          waist_in: this.state.waistInput,
          inseam_in: this.state.inseamInput,
          neck_in: this.state.neckInput,
          chest_in: this.state.chestInput,
          shoe_size_cm: this.state.footInput,
        }
      )
    })
  }

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
    };

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset = {70}>
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.avatarContainer}>
                <Avatar
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                  onPress ={() => console.log("Works!")}
                />
              </View>
              <View style={styles.aboutContainer}>
                <Text style={styles.about}>First Name: Rob</Text>
                <Text style={styles.about}>Last Name: Hill</Text>
              </View>
              <View >
                <Button
                  buttonStyle={{backgroundColor:'#a6a6a8'}}
                  onPress={this.editProfileInputs}
                  title="Edit"
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  raised= {true}
                  onPress={this.onLogOut}
                  title="Log Out"
                  buttonStyle={{borderRadius:5}}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  containerStyle={{overflow:'hidden', borderRadius:6}}
                  raised= {true}
                  onPress={this.measurementsButtonClicked}
                  title="My Measurements"
                />
              </View>
              <View>
              {this.state.measurementsClicked ? <Measurements onInputChange = {this.onInputChange} saveMeasurementsButtonClicked = {this.saveMeasurementsButtonClicked} waistInput = {this.state.waistInput} heightInput = {this.state.heightInput} chestInput = {this.state.chestInput} inseamInput = {this.state.inseamInput} footInput = {this.state.footInput}/> : null}
              </View>
            </ScrollView>
          </View>
        </ThemeProvider>
      </KeyboardAvoidingView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainer: {
    paddingTop: 30,
  },
  avatarContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#858b96',
  },
  buttonContainer: {
    padding: 10,
    paddingLeft: 100,
    width: '75%',
  },
  aboutContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  about:{
    fontSize: 25,
    paddingTop: 10,
    justifyContent: 'center'
  },
});
