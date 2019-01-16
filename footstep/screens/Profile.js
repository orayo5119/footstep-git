import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Image, Alert } from 'react-native';



class Profile extends Component {
    render (){
      return (
        <View style={styles.container}>
            <Text>This is Profile page</Text>
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

export default Profile;