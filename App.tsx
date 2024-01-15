import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Segment from '@/segmentCont';
import {useColorScheme} from 'nativewind';

const App = () => {
  const {colorScheme} = useColorScheme();
  return (
    <>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView className="flex flex-1 items-center justify-center dark:bg-black">
        <Segment />
      </SafeAreaView>
    </>
  );
};

export default App;
