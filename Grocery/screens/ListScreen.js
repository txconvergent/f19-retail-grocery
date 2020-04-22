import * as WebBrowser from 'expo-web-browser';
//import React from 'react';
import {
  Button,
  Image,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';
import { MonoText } from '../components/StyledText';
import GroceryListsRow from '../components/GroceryListsRow';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
//import arrayMove from 'array-move';
import SortableList from 'react-native-sortable-list';


function renderRow(item) {
  return (
    <GroceryListsRow 
      item={item}
      //navigation={this.props.navigation}
      />
  );

}

/*var data = {
  0: {
    image: 'https://placekitten.com/200/240',
    text: 'Watermelon',
  },
  1: {
    image: 'https://placekitten.com/200/201',
    text: 'Ground Beef',
  },
  2: {
    image: 'https://placekitten.com/200/202',
    text: 'Peppercorn',
  },
  3: {
    image: 'https://placekitten.com/200/203',
    text: 'Ice cream',
  },
  4: {
    image: 'https://placekitten.com/200/204',
    text: 'Fiji Apples',
  },
  5: {
    image: 'https://placekitten.com/200/205',
    text: 'Mangos',
  },
  6: {
    image: 'https://placekitten.com/200/210',
    text: 'Kiwi',
  },
  7: {
    image: 'https://placekitten.com/200/215',
    text: 'Water filter',
  },
  8: {
    image: 'https://placekitten.com/200/220',
    text: 'Plastic forks',
  },
  9: {
    image: 'https://placekitten.com/220/239',
    text: 'Blender',
  },
};*/ 

var data = [
   {
    image: 'https://placekitten.com/200/240',
    text: 'Watermelon',
  },
   {
    image: 'https://placekitten.com/200/201',
    text: 'Ground Beef',
  },
  {
    image: 'https://placekitten.com/200/202',
    text: 'Peppercorn',
  },
  {
    image: 'https://placekitten.com/200/203',
    text: 'Ice cream',
  },
  {
    image: 'https://placekitten.com/200/204',
    text: 'Fiji Apples',
  },
  {
    image: 'https://placekitten.com/200/205',
    text: 'Mangos',
  },
  {
    image: 'https://placekitten.com/200/210',
    text: 'Kiwi',
  },
  {
    image: 'https://placekitten.com/200/215',
    text: 'Water filter',
  },
  {
    image: 'https://placekitten.com/200/220',
    text: 'Plastic forks',
  },
  {
    image: 'https://placekitten.com/220/239',
    text: 'Blender',
  },
  ];

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HEADER</Text>
        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={this.state.data}
          renderRow={this._renderRow} />
          <Button
          title="remove item"
          onPress={() => this.setState(previousState => ({data: previousState.data.splice(5, 1)}))}
        />
      </View>
    );
  }

  _renderRow = ({data, active}) => {
    return <Row data={data} active={active} />
  }
}

class Row extends Component {

  constructor(props) {
    super(props);

    this._active = new Animated.Value(0);

    this._style = {
      ...Platform.select({
        ios: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.1],
            }),
          }],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [{
            scale: this._active.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.07],
            }),
          }],
          elevation: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      })
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active),
      }).start();
    }
  }

  render() {
   const {data, active} = this.props;

    return (
      <Animated.View style={[
        styles.row,
        this._style,
      ]}>
        <Image source={{uri: data.image}} /*style={styles.image} *//>
        <Text style={styles.text}>{data.text}</Text>
      </Animated.View>
    );
  }
}

  



// export default class ListScreen extends React.Component {
//   render() {
//     var data = [
//     {Name: "Item 1"},
//     {Name: "Item 2"},
//     {Name: "Item 3"},
//     ]
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           style={styles.container}
//           contentContainerStyle={styles.contentContainer}>
//           <FlatList
//             style={styles.container}
//             data={data}
//             renderItem={({ item }) => renderRow(item)}/>
//         <Button
//           title="back"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         </ScrollView>

//       </View>
//     );
//   }
// }

ListScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    width: window.width,

    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },

  title: {
    fontSize: 20,
    paddingVertical: 40,
    color: '#999999',
  },

  list: {
    flex: 1,
  },

  contentContainer: {
    width: 350,

    ...Platform.select({
      ios: {
        paddingHorizontal: -30,
      },

      android: {
        paddingHorizontal: 0,
      }
    })
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    //padding: 0,
    height: 40,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    width: window.width,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowRadius: 2,

    //width: window.width - 30 * 2,
    //shadowColor: 'rgba(0,0,0,0.2)',
    //shadowOpacity: 1,
    //shadowOffset: {height: 2, width: 2},
    //shadowRadius: 2,

    // ...Platform.select({
    //   ios: {
    //     width: window.width - 30 * 2,
    //     shadowColor: 'rgba(0,0,0,0.2)',
    //     shadowOpacity: 1,
    //     shadowOffset: {height: 2, width: 2},
    //     shadowRadius: 2,
    //   },

    //   android: {
    //     width: window.width - 30 * 2,
    //     elevation: 0,
    //     marginHorizontal: 30,
    //   },
    // })
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  },

  text: {
    fontSize: 18,
    marginRight: 30,
    color: '#222222',
  },
});