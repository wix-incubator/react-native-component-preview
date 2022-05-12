import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Dimensions, LayoutAnimation} from 'react-native';
import {ComponentPreviewData} from '../../types';
import {PreviewList} from './preview-list';

interface VerticalDrawerProps {
  previews: Array<ComponentPreviewData>;
  onPreviewPress: (preview: ComponentPreviewData) => void;
}

export const PreviewsVerticalDrawer: React.FC<VerticalDrawerProps> = React.memo(({previews, onPreviewPress}) => {
  const windowHeight = Dimensions.get('window').height;
  const EXPANDED_HEIGHT = Math.max(200, windowHeight / 3);
  const COLLAPSED_HEIGHT = 34;

  const [expanded, setExpanded] = React.useState(true);

  const handleCollapsePress = () => {
    setExpanded(!expanded);

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const containerStyle = {
    ...styles.container,
    height: expanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT,
  };

  const collapseButtonText = expanded ? `> collapse <` : `< expand >`;

  return (
    <View style={containerStyle}>
      <TouchableOpacity style={styles.collapseButton} onPress={handleCollapsePress}>
        <Text style={styles.collapseButtonText}>{collapseButtonText}</Text>
      </TouchableOpacity>
      <PreviewList previews={previews} onPreviewPress={onPreviewPress} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
    backgroundColor: 'white',
  },
  collapseButton: {
    alignContent: 'center',
    padding: 5,
    borderWidth: 2,
    borderColor: '#79AFD2',
    backgroundColor: '#94C1DB',
  },
  collapseButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
