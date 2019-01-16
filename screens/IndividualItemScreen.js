import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'
import { Icon } from 'expo';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Item',
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
      info: [] ,
      favorited_ids: [1,2,4],
      }
    }



  fetchInfo = () => {
    let id = 2
    fetch (`http://localhost:3000/clothing_article/${id}`)
    .then(function(response) {
       return response.json();
     })
     .then(function(data) {
       console.log(JSON.stringify(data.article_name));
     });
  }


  onFavoritedPressed = (id) => {
    let currentId = id
    if (this.state.favorited_ids.includes(currentId)){
       const result = this.state.favorited_ids.filter(item => item.id !== currentId)
       this.setState({favorited_ids: result})
   // need to fix
       return result
     }
   //need to fix
    else{this.state.favorited_ids.push(currentId)}
  }


  render() {
    const iconColor = this.state.favorited_ids.includes(this.state.info.clothing_article_id) ? '#a05000' : '#a6a6a8'
    console.log(this.state.info)
    return (
      <View style = {styles.item}>
        {this.fetchInfo}
        <ImageBackground
          source={{uri: this.state.info.img_url}}
          style={{width: '100%', height: '93%'}}
        >
            <TouchableOpacity onPress={() =>{this.onFavoritedPressed(this.state.info.clothing_article_id)}} >
              <Icon.Ionicons
                name='ios-heart'
                size={33}
                style={{ marginLeft: 10 }}
                color={iconColor}
              />
          </TouchableOpacity>
        </ImageBackground>
        <View >
          <Text >{this.state.info.article_name}</Text>
        </View>
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
  item: {
    height: '100%',
    width: '100%'
  },
});
