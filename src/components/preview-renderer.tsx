import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ComponentPreviewData} from '../../types';
import {withBorderView} from '../utils/with-border-view';

export interface ComponentPreviewRendererProps {
  previewData: ComponentPreviewData;
}

export const ComponentPreviewRenderer: React.FC<ComponentPreviewRendererProps> = React.memo(({previewData}) => {
  const Wrapper = previewData.containerType === 'Scroll' ? ScrollView : View;
  return (
    <Wrapper style={styles.container}>
      {previewData.previews.map((preview, key) => withBorderView(preview(), key))}
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
});
