import React from 'react';
import { ScrollView, StyleSheet, View, Text} from 'react-native';
import { Avatar } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

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
      }
    }

  render() {
    const clothingList = this.state.clothing.map(article =>{
      return <View style={styles.clothingItem}>
                <Avatar
                  size="xlarge"
                  rounded= {false}
                  source={{uri: article.img_url}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.6}
                />
                <Text>{article.name}</Text>
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
    height: 200,
    width: 200
  }
});
