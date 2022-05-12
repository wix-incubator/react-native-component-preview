import React from 'react';
import {View} from 'react-native';

const BorderView: React.FC = ({children}) => (
  <View style={{borderWidth: 1, borderColor: 'green', marginVertical: 4}}>{children}</View>
);

export const withBorderView = (Component: JSX.Element, key: React.Key) => {
  return <BorderView key={key}>{Component}</BorderView>;
};
