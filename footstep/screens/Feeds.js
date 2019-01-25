import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { ImagePicker, Permissions } from 'expo';




class Feeds extends Component {
  state = {
    image: null,
  };

    render (){

      let { image } = this.state;

      return ( 
        <View style={styles.container}>
            <Text>This is journey page</Text>

        </View>
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

export default Feeds;