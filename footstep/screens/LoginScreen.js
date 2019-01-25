import React from 'react';
import { View, Button, Text, StyleSheet, Image, Alert} from 'react-native'
import * as firebase from 'firebase';
import BottomNavigation from '../navigation/BottomNavigation';
import { createStackNavigator } from 'react-navigation';



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

class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          userInfo: null
        };
      }
    
      componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user != null) {
            console.log(user)
          }
        })
      };

    renderImage(){

        console.log(this.state.userInfo);
        this.render(
          // <View>
          //   <Image source={{url: this.state.userInfo.photoURL}} />
            
          // </View>
          
        )
  }



      async FBlogIn() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Expo.Facebook.logInWithReadPermissionsAsync('379839499457170', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {

            const credential = firebase.auth.FacebookAuthProvider.credential(token)
      
            firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) =>{
            console.log(error)
            })

            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
            const userInfo = await response.json();
            this.setState({ userInfo });
            // this.renderImage();
            

            Alert.alert('Logged in!', `Hi ${this.state.userInfo.name}!`);
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }

      _renderUserInfo = () => {
          return (
            <View>
                <Image
                    source={{ url: this.state.userInfo.picture.data.url}}
                    style={{ width: 80, height: 80, borderRadius: 30}}
                />
                <Text></Text>
                <Text> ID: {this.state.userInfo.id}</Text>
            </View>
            
          );
      };
    
    render() {
        return (
        <View>
            <View >
                <Image source={require('../assets/Journey-logo.png')} />
            </View>

            {!this.state.userInfo ? (<Button title="login with fb" onPress={this.FBlogIn.bind(this)} />):(this._renderUserInfo())}

        </View>
            
            
        );

    }


}

const styles = StyleSheet.create({
    loginpage: {
        marginTop:300,
        alignItems: 'center',
    },
  });

export default LoginScreen;