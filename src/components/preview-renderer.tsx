import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {ComponentPreviewData, Preview} from '../../types';

export interface ComponentPreviewRendererProps {
  previewData: ComponentPreviewData;
}

export const ComponentPreviewRenderer: React.FC<ComponentPreviewRendererProps> = React.memo(({previewData}) => {
  const Wrapper = previewData.containerType === 'Scroll' ? ScrollView : View;
  return (
    <Wrapper style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      {previewData.previews.map((preview, key) => (
        <PreviewRenderer preview={preview} key={key} />
      ))}
    </Wrapper>
  );
});

interface PreviewRendererProps {
  preview: Preview;
}

const PreviewRenderer: React.FC<PreviewRendererProps> = React.memo(({preview}) => {
  return (
    <View>
      <Text style={styles.previewTitle}>{preview.config.title}</Text>
      <View style={styles.componentContainer}>{preview.component()}</View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bababa',
  },
  contentContainerStyle: {
    paddingBottom: 50,
  },
  componentContainer: {
    marginVertical: 4,
  },
  previewTitle: {
    marginLeft: 12,
    fontWeight: 'bold',
  },
});
