import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'


export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
    headerStyle: {
      backgroundColor: '#1c4166',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 21,
    },
  };

  constructor(props){
  super(props)
    this.state={
      favorites: null ,
      }
    }

  favoritesChecker = () => {
    if (this.state.favorites === null){
      return (
        <Text> Looks like you haven't favorited any items yet </Text>
      )
    }
    else return(
      this.state.favorites.map(favorite =>{
        <View key = {favorite.id}>
          <Avatar
            size= "xlarge"
            rounded = {false}
            source = {{uri: favorite.img_url}}
            activeOpacity= {0.6}
          />
          <Text>{favorite.name}</Text>
        </View>
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.favoritesChecker()}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FFF',
  },
});
