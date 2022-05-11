import React from 'react';
import {PostContent} from './post-content';
import {PostFooter} from './post-footer';
import {View} from 'react-native';

interface PostViewProps {
  contentText: string;
}

export const PostView: React.FC<PostViewProps> = React.memo(({contentText}) => {
  return (
    <View style={{margin: 20, borderWidth: 1, borderRadius: 5}}>
      <PostContent contentText={contentText} />
      <PostFooter />
    </View>
  );
});
