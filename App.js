import React from 'react';
import {View, ScrollView} from 'react-native';
import MainComponent from './MainComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <MainComponent />
      </ScrollView>
    </View>
  );
};

export default App;
