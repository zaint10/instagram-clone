import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.floor(screenWidth * 1.1);

const styles = StyleSheet.create({
	postHeader: {
		width: 100 + '%',
		height: 56,
		backgroundColor: 'rgb(255,255,255)',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	userSection: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	userPic: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 5
	},
	threeDots: {
		fontWeight: 'bold',
		alignItems: 'center'
	},
	post: {
		width: screenWidth,
		height: screenHeight
	},
	postFooter: {
		width:100+'%',
		borderColor: 'rgb(233,233,233)',
		borderTopWidth:1,
		borderBottomWidth:1,
		flexDirection: 'row',
		alignItems:"center",
	
		padding: 10
	},
	alt_postFooter: {
		width: 100 + '%',
		
		borderColor: 'rgb(233,233,233)',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: "center",

		padding: 10
	},
	icon: {
		width: 35,
		height: 35,
		marginRight: 5,
	},
	total_likeBar:{
		width: 20,
		height: 20,
		marginRight: 5,
	}
});

export default styles;
