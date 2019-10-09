import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SignupScreen extends Component {


    signUp(){
        this.props.navigation.navigate('SignIn')
    }
    render() {
        return (
            <View style={{ backgroundColor: "rgb(65,55,85)",width: 100 + '%', height: 100 + '%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={()=>{this.signUp()}}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
               
            </View>
            
        );
    }
}

export default SignupScreen;
