import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Animated, SafeAreaView, Platform} from 'react-native';
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

// Adjustment based on mobile screen size
const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
	    // For android Top navigation 上方位置的修正
        componentWillMount() {
  
            this.scrollY = new Animated.Value(0)
    
            this.startHeaderHeight = 103;
            this.endHeaderHeight = 80;
    
            if (Platform.OS == 'android') {
                this.startHeaderHeight = 70 + StatusBar.currentHeight;
                this.endHeaderHeight = 40 + StatusBar.currentHeight;
            }
    
            this.animatedHeaderHeight = this.scrollY.interpolate({
                inputRange:[0,30],
                outputRange: [this.startHeaderHeight, this.endHeaderHeight],
                extrapolate: 'clamp'
            })
    
            this.animatedOpacity = this.animatedHeaderHeight.interpolate({
                inputRange:[this.endHeaderHeight, this.startHeaderHeight],
                outputRange:[0,1],
                extrapolate:"clamp"
            })
    
            this.animatedTagTop = this.animatedHeaderHeight.interpolate({
                inputRange:[this.endHeaderHeight, this.startHeaderHeight],
                outputRange:[0,8.5],
                extrapolate:"clamp"
            })
    
            this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
                inputRange: [this.endHeaderHeight, this.startHeaderHeight],
                outputRange: [50, 30],
                extrapolate: 'clamp'
            })
    
        }
    
        render() {
            return (
              
                // SafeAreaView 避掉 iphone x 的瀏海
                // 上方Top navigation coding demo
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Animated.View
                            style={{
                                height: this.animatedHeaderHeight,
                                backgroundColor: 'white',
                                borderBottomWidth: 1,
                                borderBottomColor: '#B7B7B7'
                            }}
                        ></Animated.View>
                    </View>
                    <BottomNavigation/>
                </SafeAreaView>
                
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