import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import styles from 'src/styles.js'
const Login = (props) => {
    return(
        <View style={styles.root}>
            <View style={styles.logoHeader}>
                <Text style={styles.logo}>Instagram</Text>
            </View>

        </View>
    )
};



const styles=StyleSheet.create({
    
    root:{
        width:100+"%",
        height:100+'%',
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    logoHeader:styles.logoHeader

})
export default Login;
