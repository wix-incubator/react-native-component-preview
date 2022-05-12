import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={{padding: 20}}>
        <Text>
          This the main screen of your App. The other tab should only be used as development tool for component preview
        </Text>
      </View>
    </SafeAreaView>
  );
};
