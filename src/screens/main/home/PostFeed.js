import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Post } from 'src/presen-components';


class PostFeed extends Component {
    _renderPost() {
        return <Post />;
    }
    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={() => this._renderPost()}
                keyExtractor={(item) => () => {
                    return item.toString();
                }}
            />
        );
    }
}

export default PostFeed;
