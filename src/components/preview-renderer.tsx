import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {withBorderView} from '../utils/with-border-view';

export interface ComponentPreviewRendererProps {
  previews: Array<() => JSX.Element>;
}

export const ComponentPreviewRenderer: React.FC<ComponentPreviewRendererProps> = React.memo(({previews}) => {
  return <ScrollView style={styles.container}>{previews.map((preview) => withBorderView(preview()))}</ScrollView>;
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
});
