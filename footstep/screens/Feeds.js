import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Image} from 'react-native';
import { ImagePicker } from 'expo';
import * as firebase from 'firebase';
import HeaderBar from './HeaderBar'



class Feeds extends Component {
    render (){
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