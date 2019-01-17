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
  ImageBackground,
} from 'react-native';

import {Button, ThemeProvider, Avatar} from 'react-native-elements'
// import {Icon} from 'react-native-vector-icons/FontAwesome'
import { WebBrowser, Icon } from 'expo';

import { MonoText } from '../components/StyledText';
import Measurements from '../components/Measurements';
import MeasurementsSaved from '../components/MeasurementsSaved';
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
      backgroundColor: '#205e74',
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
    this.setState({[key]: value}, () => {
      console.log(this.state)
    } )
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
          color: '#fff',
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
      Icon:{paddingTop: 11, paddingLeft: 18 }
    };

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled keyboardVerticalOffset = {70}>
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <ImageBackground source={{uri: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}} style={styles.avatarContainer}>

                <Avatar
                  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                  onPress ={() => console.log("Works!")}

                />
              </ImageBackground>
              <View style={styles.buttonContainer}>
                <Button
                  containerStyle={{overflow:'hidden', borderRadius:6}}
                  raised= {true}
                  onPress={this.measurementsButtonClicked}
                  title="Edit Measurements"
                />
              </View>
              <View>
              {this.state.measurementsClicked ? <Measurements
                                                onInputChange = {this.onInputChange}
                                                saveMeasurementsButtonClicked = {this.saveMeasurementsButtonClicked}
                                                waistInput = {this.state.waistInput}
                                                heightInput = {this.state.heightInput}
                                                chestInput = {this.state.chestInput}
                                                inseamInput = {this.state.inseamInput}
                                                footInput = {this.state.footInput}
                                                neckInput = {this.state.neckInput}/> :
                                                <MeasurementsSaved
                                                waistInput = {this.state.waistInput}
                                                heightInput = {this.state.heightInput}
                                                chestInput = {this.state.chestInput}
                                                inseamInput = {this.state.inseamInput}
                                                footInput = {this.state.footInput}
                                                neckInput = {this.state.neckInput}/>
              }
              </View>
              <View style={styles.logoutButtonContainer}>
                <Button
                  raised= {true}
                  onPress={this.onLogOut}
                  title="Log Out"
                  buttonStyle={{borderRadius:5}}
                />
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
    paddingTop: 0,
    backgroundColor: '#e7e8dc',
    paddingBottom: 250,
  },
  avatarContainer: {
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 30,
    marginTop: 0,
    marginBottom: 20,
    backgroundColor: '#858b96',
  },
  buttonContainer: {
    padding: 10,
    paddingLeft: 100,
    width: '75%',
  },
  logoutButtonContainer: {
    padding: 10,
    paddingLeft: 100,
    width: '75%',
    paddingTop: 130,
  },
  aboutContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  about:{
    fontSize: 25,
    paddingTop: 10,
    justifyContent: 'center',
  },
});
