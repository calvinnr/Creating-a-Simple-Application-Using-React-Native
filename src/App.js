import React from 'react';
import {View, ScrollView} from 'react-native';
import MainComponent from './pages/MainComponent';
import Flex from './pages/Flex/';
import Position from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <MainComponent />
        <Flex />
        <Position />
      </ScrollView>
    </View>
  );
};

export default App;
