import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import hehe from '../../assets/image/hehe.jpg';

class Flex extends Component {
  constructor(props) {
    super(props);
    console.log('==> Constructor');
    this.state = {
      subscriber: 300,
    }
  }

  componentDidMount(){
    console.log('==> Component Did Mount');
    setTimeout(() => {
    this.setState({
      subscriber: 400,
    });
  }, 2000);
  }

  componentDidUpdate(){
    console.log('==> Component Did Update');
  }

  componentWillUnmount(){
    console.log('==> Component Will Unmount');
  }

  render() {
    console.log('==> Render');
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
            <Text>{this.state.subscriber} Subscribers</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Flex;
