# react-native-component-preview
A small typescript library for previewing react-native components. 

With this library we can render components using different props to see how they look in a different state. Opinionated Pros:
- Faster Development flow as you can see multiple components rendering with different props at once.
- Enforces of separation between UI and business logic. Smaller files, better readablity.
- Testable components & code.

### How To.

```ts
import {ComponentPreviewBuilder, ComponentPreviews} from 'react-native-component-preview';

// Build component previous using a provided builder.
export const postContentPreview = new ComponentPreviewBuilder('Post Content', PostContent)
  .withPreview({
    contentText: '',
  })
  .withPreview({
    contentText: 'Hello World',
  })
  .build();

// Build all of the previous into an array.
const previews = [postContentPreview];

// Renders Component Previews Screen
const PreviewScreen = <ComponentPreviews previews={previews} />
```