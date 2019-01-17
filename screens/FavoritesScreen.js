import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'


export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
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
      clothing:[
        {
          id: 1,
          name: 'Mens Breathe Hyper Dry Training Top',
          brand_id: 1,
          clothing_type_id: 1,
          img_url:'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/10326792_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
          sex: 'male'
        },
        {
          id: 2,
          name: 'Saturday Stretch Lightweight Flannel',
          brand_id: 2,
          clothing_type_id: 2,
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M43497_340_1?$hi-res$',
          sex: 'male'
        },
        {
          id: 3,
          name: 'Venice Burnout Henley',
          brand_id: 2,
          clothing_type_id: 1,
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M62435_400_1?$hi-res$',
          sex: 'male'
        },
        {
          id: 4,
          name: 'Mateo Western Shirt',
          brand_id: 2,
          clothing_type_id: 2,
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7MD41472_460_1?$hi-res$',
          sex: 'male'
        },
        {
          id: 5,
          name: '410 Athletic Slim Jean',
          brand_id: 2,
          clothing_type_id: 3,
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7MD10316_420_1?$hi-res$',
          sex: 'male'
        }
      ],
      favorites: [1,2,3,4],
      }
    }

  onPressClothingItem = (key) => {
      console.log("pressed id", key)
      this.props.navigation.navigate('IndividualItem')
  }

  favoritesChecker = () => {
    if (!this.state.favorites.length){
      return(
        <Text> Looks like you haven't favorited any items yet </Text>
      )
    }
    else{
      const filteredFavs = this.state.clothing.filter(item =>{
        console.log(this.state.favorites.includes(item.id))
        return this.state.favorites.includes(item.id)
       })
      const mapped = filteredFavs.map(item =>{
        console.log(item)
        return(
          <View key = {item.id} style = {styles.clothingItem} >
            <TouchableOpacity onPress={() => {this.onPressClothingItem(item.id)}}>
              <Avatar
                size= "xlarge"
                rounded = {false}
                source = {{uri: item.img_url}}
                activeOpacity= {0.6}

              />
            </TouchableOpacity>
            <Text>{item.name}</Text>
          </View>
        )
      })
      return mapped
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.favoritesChecker()}
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor:'#f7f2ed',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  clothingItem: {
    height: 250,
    width: 200,
    paddingBottom:15,
  }
});
