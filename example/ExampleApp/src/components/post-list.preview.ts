import {ComponentPreviewBuilder} from 'react-native-component-preview';
import {PostList} from './post-list';

export const postListPreview = new ComponentPreviewBuilder({
  title: 'Post List',
  component: PostList,
  containerType: 'View',
})
  .withPreview({
    isLoading: true,
    posts: [],
  })
  .withPreview({
    isLoading: false,
    posts: [
      {authorName: 'Johny', contentText: 'First!', isLiked: false},
      {authorName: 'Mary Jane', contentText: 'I like this app.', isLiked: true},
      {authorName: 'John Smith Jameson', contentText: 'I am a bot.', isLiked: true},
    ],
  })
  .build();
