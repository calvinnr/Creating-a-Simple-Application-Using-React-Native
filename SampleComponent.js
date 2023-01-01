import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import hehe from './hehe.jpg';

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#0abde3',
          borderWidth: 2,
        }}
      />
      <Text>Calvin</Text>
      <Home />
      <Text>Rahaditya</Text>
      <Profile />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Home = () => {
  return <Text>Novryan</Text>;
};

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={hehe}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
      </View>
    );
  }
}

export default SampleComponent;
