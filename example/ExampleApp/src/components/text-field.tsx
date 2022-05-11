import React from 'react';
import {View, TextInput} from 'react-native';

interface TextFieldProps {
  onChangeText?: (text: string) => void;
}

export const TextField: React.FC<TextFieldProps> = React.memo(({onChangeText}) => {
  return (
    <View style={{margin: 20, borderWidth: 1}}>
      <TextInput placeholder="Enter Text Here" style={{padding: 10}} onChangeText={onChangeText} />
    </View>
  );
});
