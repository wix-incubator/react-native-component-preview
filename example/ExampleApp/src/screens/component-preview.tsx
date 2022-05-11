import React from 'react';
import {ComponentPreviews} from 'react-native-component-preview';
import {previews} from '../../src/components/component-previews';

export const ComponentPreviewScreen: React.FC = React.memo(() => <ComponentPreviews previews={previews} />);
