import {ComponentPreviewBuilder} from 'react-native-component-preview';
import {PostView} from './post-view';

export const postViewPreview = new ComponentPreviewBuilder({title: 'PostView', component: PostView})
  .withPreview({
    contentText: '',
    authorName: '',
    isLiked: false,
  })
  .withPreview({
    contentText: 'Hello World',
    authorName: 'Johny',
    isLiked: true,
  })
  .withPreview({
    contentText:
      'Hello World. Hello World. Hello World. Hello World. Hello World. Hello World. Hello World. Hello World',
    authorName: 'John Smith Smithy Joneson',
    isLiked: false,
  })
  .build();
