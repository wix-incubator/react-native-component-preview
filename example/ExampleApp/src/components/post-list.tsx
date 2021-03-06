import React from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {PostView} from './post-view';

interface Post {
  authorName: string;
  contentText: string;
  isLiked: boolean;
}

interface PostListProps {
  isLoading: boolean;
  posts: Array<Post>;
}

export const PostList: React.FC<PostListProps> = React.memo(({isLoading, posts}) => {
  if (isLoading) {
    return <Loader />;
  }

  return <FlatList<Post> data={posts} renderItem={renderItem} ItemSeparatorComponent={Separator} />;
});

const renderItem = ({item, index}: {item: Post; index: number}) => {
  return <PostView key={index} authorName={item.authorName} contentText={item.contentText} isLiked={item.isLiked} />;
};

const Separator = () => <View style={{height: 2, backgroundColor: 'grey'}} />;

const Loader = () => (
  <View style={{backgroundColor: 'white', padding: 12}}>
    <ActivityIndicator />
  </View>
);
