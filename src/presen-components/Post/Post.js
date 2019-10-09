import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import styles from './styles.js';
import icons from 'assets/icons';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            liked: false,
            screenWidth: Math.round(Dimensions.get('window').width)
        };
    }

    likedToggle() {
        this.setState({
            liked: !this.state.liked
        });
    }
    render() {
        const screenHeight = Math.round(this.state.screenWidth * 1.1);
        const uriPost =
            'https://lh3.googleusercontent.com/Axp7zdiZfiFUV_kgESPLjpSEvy9uXnHoGB6_Ewqsn0FgR3-6CZ_RPUqeHK2XqmN5ugjSlGI1GB24-FNX3Xz_X8qTOQ' +
            '=s' +
            screenHeight +
            '-c';
        const uriUserImg =
            'https://lh3.googleusercontent.com/7mfOyy_QRsf4_WVbxvvrDgNGgJQhDJTdfCH4kWHuQa77eeGIAo39bPBTTVC1wwGj9GnQpX1k1oHe8pl42L9tW8mn';

        return (
            <View>
                <View style={styles.postHeader}>
                    <View style={styles.userSection}>
                        <Image
                            style={styles.userPic}
                            source={{
                                uri: uriUserImg
                            }}
                        />

                        <Text>zainy938</Text>
                    </View>

                    <View>
                        <Text style={styles.threeDots}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPressOut={() => {
                        this.likedToggle();
                    }}
                >
                    <Image
                        style={styles.post}
                        source={{
                            uri: uriPost
                        }}
                    />
                </TouchableOpacity>

                <View style={styles.postFooter}>
                    <Image style={[styles.icon]} source={icons.heart} />

                    <Image style={styles.icon} source={icons.bubble} />
                    <Image style={styles.icon} source={icons.share} />
                </View>

                <View style={styles.alt_postFooter}>
                    <Image style={([styles.icon], { width: 20, height: 20 })} source={icons.heart_fill} />
                    <Text>123 likes</Text>
                </View>
            </View>
        );
    }
}

export default Post;
