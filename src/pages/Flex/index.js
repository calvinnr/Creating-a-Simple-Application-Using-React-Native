import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import hehe from '../../assets/image/hehe.jpg';

class Flex extends Component {
  render() {
    console.log('Hello debugger');
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#ecf0f1',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#e74c3c', width: 50, height: 50}} />
          <View style={{backgroundColor: '#f1c40f', width: 50, height: 50}} />
          <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
          <View style={{backgroundColor: '#3498db', width: 50, height: 50}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={hehe}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 10}}
          />
          <View>
            <Text style={{fontWeight: 'bold'}}>Calvin Novryan</Text>
            <Text>1 Juta Subscribers</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Flex;
