import React from 'react';
import { ScrollView, StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements'
import { Icon } from 'expo';
import Colors from '../constants/Colors';

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    title: 'Shop',
    headerStyle: {
      backgroundColor: '#1c4166',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 21,
    },
  };

  constructor(props){
  super(props)
    this.state={
      clothing:[  {
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
        }],
        favorited_ids: [2,4],
      }
    }
  // onFavoritedPressed = () => {
  //   let currentId =
  //   if (this.state.favorited_ids.includes(currentId)){
  //      this.state.favorited_ids.delete(currentId)
  //    }
  //
  //   else{this.state({favorited_ids}).push(currentId)}
  // }


  render() {

    const clothingList = this.state.clothing.map(article =>{
      const iconColor = this.state.favorited_ids.includes(article.id) ? '#a05000' : '#a6a6a8'
      return <View key= {article.id} style={styles.clothingItem}>
                <ImageBackground
                  source={{uri: article.img_url}}
                  style={{width: '100%', height: '93%'}}
                >
                    <TouchableOpacity onPress={this.onFavoritedPressed} >
                    <Icon.Ionicons
                      name='ios-heart'
                      size={33}
                      style={{ marginLeft: 10 }}
                      color={iconColor}

                    />
                  </TouchableOpacity>
                </ImageBackground>
                <View >
                  <Text >{article.name}</Text>
                </View>
             </View>
    })
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {clothingList}
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
