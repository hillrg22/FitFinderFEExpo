import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'
import { Icon } from 'expo';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Item',
    headerStyle: {
      backgroundColor: '#205e74',
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
      clothing_article_id: 1,
      article_name: "Mens Breathe Hyper Dry Training Top",
      img_url: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/10326792_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$",
      brand_name: "Nike",
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
    const iconColor = this.state.favorited_ids.includes(this.state.clothing_article_id) ? '#a05000' : '#a6a6a8'
    console.log(this.state.info)
    return (
      <View style = {styles.item}>
        {this.fetchInfo}
        <ImageBackground
          source={{uri: this.state.img_url}}
          style={styles.picture}
        >
            <TouchableOpacity onPress={() =>{this.onFavoritedPressed(this.state.clothing_article_id)}} >
              <Icon.Ionicons
                name='ios-heart'
                size={33}
                style={{ marginLeft: 10 }}
                color={iconColor}
              />
          </TouchableOpacity>
        </ImageBackground>
        <View >
          <Text style={styles.articleName}>{this.state.article_name}</Text>
          <Text style={styles.bestFit}>Your Best Fit:   Medium </Text>
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
    // height: '100%',
    // width: '100%',
    alignItems: 'center',
  },
  picture: {
    width: 375,
    height: 500,
    marginBottom: 20,
    marginTop: 20,
  },
  articleName: {
    fontSize: 20,
  },
  bestFit: {
    fontSize: 18,
    fontWeight: "700",
  },
});
