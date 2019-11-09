import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ListScreen from '../screens/ListScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ListStack = createStackNavigator(
  {
    List: ListScreen,
  },
  config
);


export default ListStack;
