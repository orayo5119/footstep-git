import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions, Animated, SafeAreaView, Platform, StatusBar, TouchableHighlight, TouchableOpacity} from 'react-native';
import { MapView, ImagePicker, Permissions } from 'expo';
import * as firebase from 'firebase';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import Journey from './screens/Journey';
import Feeds from './screens/Feeds';
import Profile from './screens/Profile';
import BottomNavigation from './screens/BottomNavigation'
import AddPic from './screens/AddPic';



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



// header code:
// Adjustment based on mobile screen size
const { height, width } = Dimensions.get('window');

export default class App extends React.Component {

    

	    // For android Top navigation 上方位置的修正
        componentWillMount() {
  
            this.scrollY = new Animated.Value(0)
    
            this.startHeaderHeight = 60;
            this.endHeaderHeight = 60;
    
            if (Platform.OS == 'android') {
                this.startHeaderHeight = 50 + StatusBar.currentHeight;
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
                <React.Fragment>

                    {/* <Button onPress={() => this.loginWithFacebook()}>Login with Facebook</Button> */}
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Animated.View
                                style={{
                                    flexDirection: "row",
                                    height: this.animatedHeaderHeight,
                                    backgroundColor: 'white',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#B7B7B7',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingHorizontal: 20,

                                }}
                            >
                            <AddPic />
                            
                            <Image source={require('./assets/Journey-logo.png')} />
                            
                            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                                <View>
                                    <Icon name="menu" size={30} color='gray'/>
                                </View>
                            </TouchableOpacity>
                            
                            </Animated.View>
                        </View>

                    </SafeAreaView>
                    
                    <BottomNavigation/>

                </React.Fragment>
                
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
    button: {

        marginBottom: 5,
   
    },
  });