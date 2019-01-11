import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-elements'
import {Icon} from 'react-native-vector-icons/FontAwesome'
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onLogOut = (e) =>{
    console.log("Logging Out")
  }

  editProfileInputs = (e) => {
    console.log("edit inputs")
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <View style={styles.editProfile}>
            <Button
              style={styles.editProfileButton}
              onPress={this.editProfileInputs}
              title="Edit"
            />
          </View>
          <View style={styles.aboutContainer}>
            <Text style={styles.about}>UserName: Bobbert</Text>
            <Text style={styles.about}>First Name: Rob</Text>
            <Text style={styles.about}>Last Name: Hill</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.onLogOut}
              title="Log Out"
            />
          </View>
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21284f',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  buttonContainer: {
    padding: 10,
    width: '75%',
  },
  button: {
    fontSize: 1,
  },
  aboutContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  about:{
    fontSize: 25,
    paddingTop: 10
  },
  editProfile:{
    width: '100%',
    paddingRight: 25
  },
  editProfileButton:{
    flexDirection:'column',
    alignItems: 'flex-end',

  }

});
