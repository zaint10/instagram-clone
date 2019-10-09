import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SigninScreen extends Component {
	signIn() {
		this.props.navigation.navigate('SignUp')
	}

	render() {
		style = { backgroundColor: "rgb(65,55,85)", width: 100 + '%', height: 100 + '%', alignItems: 'center', justifyContent: 'center' }
		return (
			<View style={style}>
				<TouchableOpacity
					
					onPress={() => {
						this.signIn();
					}}
				>
					<Text>SIGN IN</Text>
				</TouchableOpacity>
			</View>
			
			
		);
	}
}

export default SigninScreen;
