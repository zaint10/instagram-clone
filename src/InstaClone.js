import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from 'src/styles.js';

import { MainNavigator } from 'src/screens';

import { SignedOut, SignedIn } from 'src/router/router';

class InstaClone extends Component {
	render() {
		return (
			<View style={{ width: 100 + '%', height: 100 + '%'}}>
				<View style={styles.logoHeader}>
					<Text style={styles.logo}>Instagram</Text>
				</View>
				<SignedIn />

				
			</View>
		);
	}
}

export default InstaClone;
