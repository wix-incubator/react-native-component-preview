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

const renderItem = ({item}: {item: Post}) => {
  return <PostView authorName={item.authorName} contentText={item.contentText} isLiked={item.isLiked} />;
};

const Separator = () => <View style={{height: 2, backgroundColor: 'grey'}} />;

export const PostList: React.FC<PostListProps> = React.memo(({isLoading, posts}) => {
  if (isLoading) {
    return (
      <View style={{backgroundColor: 'white', padding: 12}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <FlatList<Post> data={posts} renderItem={renderItem} ItemSeparatorComponent={Separator} />
    </View>
  );
});
