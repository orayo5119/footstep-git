import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import * as firebase from 'firebase';




class Feeds extends Component {
  state = {
    image: null,
  };

    render (){

      let { image } = this.state;

      return ( 
        <View style={styles.container}>
            <Text>This is others' journey</Text>
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