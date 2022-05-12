import React from 'react';
import {ComponentPreviewData} from '../../types';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface PreviewListProps {
  previews: Array<ComponentPreviewData>;
  onPreviewPress: (preview: ComponentPreviewData) => void;
}

export const PreviewList: React.FC<PreviewListProps> = React.memo(({previews, onPreviewPress}) => {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);

  return (
    <ScrollView>
      {previews.map((preview, index) => {
        const handleOnPreviewPress = () => {
          setSelectedItemIndex(index);
          onPreviewPress(preview);
        };

        return (
          <PreviewListItem
            key={index}
            selected={index === selectedItemIndex}
            preview={preview}
            onPress={handleOnPreviewPress}
          />
        );
      })}
    </ScrollView>
  );
});

interface PreviewListItemProps {
  selected?: boolean;
  preview: ComponentPreviewData;
  onPress: (preview: ComponentPreviewData) => void;
}

const PreviewListItem: React.FC<PreviewListItemProps> = React.memo(({selected, preview, onPress}) => {
  const handleOnPress = () => {
    onPress(preview);
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.listItem}>
      <Text style={{fontWeight: selected ? 'bold' : 'normal'}}>{preview.title}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  listItem: {
    padding: 4,
  },
});
