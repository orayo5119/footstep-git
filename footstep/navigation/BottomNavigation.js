import React,{Component}from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, StatusBar } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import Journey from '../screens/Journey';
import Feeds from '../screens/Feeds';
import Profile from '../screens/Profile';

//Bottom navigation code
const TabNavigator = createBottomTabNavigator(
	{
		Feeds: {
			screen: Feeds,
			navigationOptions: {
				tabBarLabel: 'Feeds',
				tabBarIcon: ({ tintColor }) => <Icon name="git-branch" color={tintColor} size={24} />
			}
		},
		Journey: {
			screen: Journey,
			navigationOptions: {
				tabBarLabel: 'Maps',
				tabBarIcon: ({ tintColor }) => <Icon name="map" color={tintColor} size={24} />
			}
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				tabBarLabel: 'Profile',
				tabBarIcon: ({ tintColor }) => <Icon name="user" color={tintColor} size={24} />
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

	

const AppContainer = createAppContainer(TabNavigator);

class BottomNavigation extends Component {

	render() {
	  return <AppContainer />;
	}
  }

export default BottomNavigation;