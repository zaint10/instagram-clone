import React from 'react';

import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';

import { createStackNavigator } from 'react-navigation-stack';
const SignedOutNav = createStackNavigator({
	SignIn: {
		screen: SigninScreen,
		navigationOptions: {
			title: 'Log In'
		}
	},
	SignUp: {
		screen: SignupScreen,
		navigationOptions: {
			title: 'Sign Up'
		}
	}
});

export default SignedOutNav;
