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
            {/* <Text>This is others' journey</Text> */}
                  <View>
                    <Button
                      title="Pick an image from camera roll"
                      onPress={this._pickImage}
                    />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                  </View>
        </View>
      );
    }

    _pickImage = async () => {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
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