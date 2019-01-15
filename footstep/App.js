import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { MapView, ImagePicker } from 'expo';
import * as firebase from 'firebase';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import Journey from './screens/Journey';
import Feeds from './screens/Feeds';
import Profile from './screens/Profile';
import BottomNavigation from './screens/BottomNavigation'

//initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCMM5uK9qKbvplF-6JMWqOzi866YalrmYY",
    authDomain: "first-project-a936d.firebaseapp.com",
    databaseURL: "https://first-project-a936d.firebaseio.com",
    projectId: "first-project-a936d",
    storageBucket: "first-project-a936d.appspot.com",
    messagingSenderId: "414258592837"
};

firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {

	render() {
      return (
        <BottomNavigation />
      );
    
	  }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });