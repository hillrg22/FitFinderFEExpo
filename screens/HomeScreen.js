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
import {Button, ThemeProvider, Avatar} from 'react-native-elements'
import {Icon} from 'react-native-vector-icons/FontAwesome'
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {





  static navigationOptions = {
    title: 'My Profile',
    headerStyle: {
      backgroundColor: '#8e2727',
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

  render() {
    const theme = {
      Button: {
        titleStyle: {
          color: 'black',
          backgroundColor: '#8e2727',
          width: '100%',
        },
        buttonStyle:{

          borderRadius: 5
        },
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
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Avatar
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
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
                raised= {true}
                onPress={this.onLogOut}
                title="Log Out"
                buttonStyle={{borderRadius:5}}
              />
            </View>
          </ScrollView>
        </View>
      </ThemeProvider>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c4166',
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
    width: 100,

  }

});
