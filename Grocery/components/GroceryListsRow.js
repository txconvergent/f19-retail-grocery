import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class GroceryListsRow extends React.Component { 	
  constructor(props) {
    super(props);
    this.name = props.item.Name;
    this.navigation = props.navigation;
  }  

  navigateToList() {
//    this.props.navigation.navigate('List');
  }

  render() {
  	return (
      <View style={styles.item}>
        <Text style={styles.textStyle} onclick={this.navigateToList()}>
          {this.name}
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center",
   paddingTop: 22
  },
  textStyle: {
  	fontFamily: 'Times New Roman',
  	fontSize: 32,
  	color: '#d9e6ff'
  },
    item: {
    //backgroundColor: '#91b8ff',
    borderRadius: 10,
    //backgroundColor: '#5b579c',
	backgroundColor: 'rgb(91,87,156)',
	backgroundColor: 'linear-gradient(90deg, rgba(91,87,156,1) 0%, rgba(93,93,255,1) 35%, rgba(0,212,255,1) 100%)',
  	//borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
  // sectionHeader: {
  //   paddingTop: 2,
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   paddingBottom: 2,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   backgroundColor: 'rgba(247,247,247,1.0)',
  // },
  // item: {
  //   padding: 10,
  //   fontSize: 18,
  //   height: 44,
  // },
})

