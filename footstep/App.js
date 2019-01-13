import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 25.044911,
              longitude: 121.567461,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
