import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ComponentPreviewData} from '../../types';
import {ComponentPreviewRenderer} from './preview-renderer';
import {PreviewsVerticalDrawer} from './previews-vertical-drawer';

interface ComponentPreviewsProps {
  previews: Array<ComponentPreviewData>;
}

export const ComponentPreviews: React.FC<ComponentPreviewsProps> = React.memo(({previews}) => {
  const [currentPreviewData, setCurrentPreviewData] = React.useState<ComponentPreviewData>();

  const handleOnItemPress = (previewData: ComponentPreviewData) => {
    setCurrentPreviewData(previewData);
  };

  return (
    <View style={styles.container}>
      {currentPreviewData && <ComponentPreviewRenderer previewData={currentPreviewData} />}
      <PreviewsVerticalDrawer previews={previews} onPreviewPress={handleOnItemPress} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
