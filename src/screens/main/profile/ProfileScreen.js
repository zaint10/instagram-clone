import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class ProfileScreen extends Component {


    render() {
        style = { backgroundColor: "rgb(110,11,25)", width: 100 + '%', height: 100 + '%', alignItems: 'center', justifyContent: 'center' }
        return (
            <View style={style}>
                <TouchableOpacity

                    onPress={() => {
                        // this.signIn();
                    }}
                >
                    <Text>PROFILE</Text>
                </TouchableOpacity>
            </View>


        );
    }
}

export default ProfileScreen;
