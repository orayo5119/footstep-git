import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import Googlemaps from './screens/Googlemaps';
import Home from './screens/Home';

// export default class App extends React.Component {
//   render() {
//     return (

//       <Googlemaps style={styles.googlemaps}/>
//       <View>
//         Hello!
//       </View>
      
//     );
//   }
// }

const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={24} />
			}
		},
		Googlemaps: {
			screen: Googlemaps,
			navigationOptions: {
				tabBarLabel: 'Maps',
				tabBarIcon: ({ tintColor }) => <Icon name="map" color={tintColor} size={24} />
			}
		},

	},
	{
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
			style: {
				backgroundColor: 'white',
				borderTopWidth: 0,
				shadowOffset: { width: 3, height: 3 },
				shadowColor: 'black',
				shadowOpacity: 0.4,
				elevation: 5
			}
		}
	}
	);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default createAppContainer(TabNavigator);
