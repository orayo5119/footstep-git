
import React from 'react';
import { View, Button, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import Login from '../screens/LoginScreen';
import BottomNavigation from './BottomNavigation';

const RootStackNavigator = createStackNavigator(
  {
    Login:{
      screen: Login

    },
    Main: {
      screen: BottomNavigation,
    },
    
  },
);

export default class RootNavigator extends React.Component {
  render() {
 
    return <RootStackNavigator />;
  }
}
