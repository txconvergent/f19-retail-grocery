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
      <View style={styles.container}>
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

