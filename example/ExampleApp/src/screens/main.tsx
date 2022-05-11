import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {PostView} from '../components/post';
import {TextField} from '../components/text-field';

export const MainScreen = () => {
  const [_textInput, setTextInput] = React.useState('');

  const handleOnChangeText = React.useCallback((text: string) => {
    setTextInput(text);
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <TextField onChangeText={handleOnChangeText} />
      <ScrollView>
        <PostView contentText="Hello World" />
      </ScrollView>
    </SafeAreaView>
  );
};
