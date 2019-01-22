import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/Feather';




class AddPic extends Component {
  state = {
    image: null,
  };

    render (){

      let { image } = this.state;

      return ( 
        <View >
                  <View>

                    <TouchableOpacity onPress={this._pickImage}>
                        <View>
                            <Icon name="camera" size={30} color='gray'/>
                        </View>
                    </TouchableOpacity>
                    <View>
                      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
                    </View>
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
    
  });

export default AddPic;