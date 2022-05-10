import React from 'react';
import {ComponentPreviewData} from '../../types';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface PreviewListProps {
  previews: Array<ComponentPreviewData>;
  onPreviewPress: (preview: ComponentPreviewData) => void;
}

export const PreviewList: React.FC<PreviewListProps> = React.memo(({previews, onPreviewPress}) => {
  return (
    <ScrollView>
      {previews.map((preview) => (
        <PreviewListItem preview={preview} onPress={onPreviewPress} />
      ))}
    </ScrollView>
  );
});

interface PreviewListItemProps {
  preview: ComponentPreviewData;
  onPress: (preview: ComponentPreviewData) => void;
}

const PreviewListItem: React.FC<PreviewListItemProps> = React.memo(({preview, onPress}) => {
  const handleOnPress = () => {
    onPress(preview);
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.listItem}>
      <Text>{preview.title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  listItem: {
    padding: 4,
  },
});
