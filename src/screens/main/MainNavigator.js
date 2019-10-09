import React, { Component } from 'react';

import Home from './home/Home';
import CameraScreen from './camera/CameraScreen';
import ProfileScreen from './profile/ProfileScreen';



import { createBottomTabNavigator } from 'react-navigation-tabs';

// class MainNavigator extends Component {
// 	render() {
//         return <TabNavigator />;
// 	}
// }
// MainNavigator=()=>{
//     return <Home />
// }
const MainNavigator = createBottomTabNavigator(
    {
    
	Home:  Home,
	Camera:  CameraScreen ,
    Profile:  ProfileScreen 

    });
export default MainNavigator;
