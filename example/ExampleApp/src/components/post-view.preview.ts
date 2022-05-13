import {ComponentPreviewBuilder} from 'react-native-component-preview';
import {PostView} from './post-view';

export const postViewPreview = new ComponentPreviewBuilder({title: 'Post View', component: PostView})
  .withPreview(
    {
      contentText: '',
      authorName: '',
      isLiked: false,
    },
    {title: 'empty'}
  )
  .withPreview({
    contentText: 'Hello World',
    authorName: 'Johny',
    isLiked: true,
  })
  .withPreview(
    {
      contentText:
        'Hello World. Hello World. Hello World. Hello World. Hello World. Hello World. Hello World. Hello World',
      authorName: 'John Smith Smithy Joneson',
      isLiked: false,
    },
    {title: 'long text'}
  )
  .build();
