import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ComponentPreviewData} from '../../types';
import {ComponentPreviewRenderer} from './preview-renderer';
import {PreviewsVerticalDrawer} from './previews-vertical-drawer';

interface ComponentPreviewsProps {
  previews: Array<ComponentPreviewData>;
}

export const ComponentPreviews: React.FC<ComponentPreviewsProps> = React.memo(({previews}) => {
  const [currentPreviews, setCurrentPreviews] = React.useState<Array<() => JSX.Element>>();

  const handleOnItemPress = (preview: ComponentPreviewData) => {
    setCurrentPreviews(preview.previews);
  };

  return (
    <View style={styles.container}>
      {currentPreviews && <ComponentPreviewRenderer previews={currentPreviews} />}
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
