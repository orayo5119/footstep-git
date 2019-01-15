import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';


class Journey extends React.Component {
  render() {
    return (
      <MapView
            style={styles.maps}
            initialRegion={{
              latitude: 25.044911,
              longitude: 121.567461,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
      >      
            <MapView.Marker
              coordinate={{
                latitude: 25.044911,
                longitude: 121.567461,
              }}
                title={"Current location"}
                description={'2018/01/11'}
            />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  maps: {
    marginTop:400,
    height:200,
  }
});

export default Journey;