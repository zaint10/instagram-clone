import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class CameraScreen extends Component {
   

    render() {
        style = { backgroundColor: "rgb(15,55,85)", width: 100 + '%', height: 100 + '%', alignItems: 'center', justifyContent: 'center' }
        return (
            <View style={style}>
                <TouchableOpacity

                    onPress={() => {
                        // this.signIn();
                    }}
                >
                    <Text>CAMERA</Text>
                </TouchableOpacity>
            </View>


        );
    }
}

export default CameraScreen;
