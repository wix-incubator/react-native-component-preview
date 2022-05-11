import {ComponentPreviewBuilder} from 'react-native-component-preview';
import {PostContent} from './post-content';

export const postContentPreview = new ComponentPreviewBuilder('Post Content', PostContent)
  .withPreview({
    contentText: '',
  })
  .withPreview({
    contentText: 'Short Text',
  })
  .withPreview({
    contentText: 'Long Text, Long Text, Long Text, Long Text, Long Text, Long Text, Long Text.',
  })
  .build();
