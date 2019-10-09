import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class InboxScreen extends Component {


    render() {
        style = { backgroundColor: "rgb(15,95,125)", width: 100 + '%', height: 100 + '%', alignItems: 'center', justifyContent: 'center' }
        return (
            <View style={style}>
                <TouchableOpacity

                    onPress={() => {
                        // this.signIn();
                    }}
                >
                    <Text>INBOX</Text>
                </TouchableOpacity>
            </View>


        );
    }
}

export default InboxScreen;
