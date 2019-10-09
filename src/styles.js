import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logoHeader: {
        width: 100 + '%',
        height: 75,

        backgroundColor: 'rgb(250,250,250)',
        borderBottomColor: 'rgb(233,233,233)',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 1,

        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontSize: 40,
        fontFamily: 'Billabong'
    }
   
});

export default styles;
