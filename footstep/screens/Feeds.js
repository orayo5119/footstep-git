import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import * as firebase from 'firebase';
import {Button, SecButton} from '../components/Button';




class Feeds extends Component {
  state = {
    image: null,
  };

  async loginWithFacebook(){
    const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync
    ('379839499457170', { permissions: ['public_profile']})
  
    if(type == 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token)
  
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) =>{
        console.log(error)
      })
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  };

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
            <ActivityIndicator size="large"/>
        </View>
      )
    }
    return (
        <View>
  
           <Button onPress={() => this.loginWithFacebook()}>Login with Facebook</Button>

        </View>
     )
  }

    render (){

      let { image } = this.state;

      return ( 
        <View style={styles.container}>
            {/* <Text>This is others' journey</Text> */}
            
          {this.renderCurrentState()}
        
        </View>
      );
    }
}



const styles = StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });

export default Feeds;