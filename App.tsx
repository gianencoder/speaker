import React from 'react';
import type { PropsWithChildren } from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar

        backgroundColor='pink'
      />
      <HomeScreen />
    </SafeAreaView>
  );
}



export default App;
