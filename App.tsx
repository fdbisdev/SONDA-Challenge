import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './src/pages/Home';


const App = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Home />
    </SafeAreaView>
  );
};

export default App;
