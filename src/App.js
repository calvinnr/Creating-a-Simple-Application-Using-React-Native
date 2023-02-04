import React, { useEffect, useState } from 'react';
import {View, ScrollView} from 'react-native';
import MainComponent from './pages/MainComponent';
import Flex from './pages/Flex/';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import Cloning from './pages/Cloning';
import BasicJavascript from './pages/BasicJavascript';

const App = () => {
  const [isShow, SetisShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetisShow(false)
    }, 6000)
  }, [])
  return (
    <View>
      <ScrollView>
        {/* <MainComponent /> */}
        {/* <Flex /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <Position /> */}
        {/* <Cloning /> */}
        <BasicJavascript />
      </ScrollView>
    </View>
  );
};

export default App;
