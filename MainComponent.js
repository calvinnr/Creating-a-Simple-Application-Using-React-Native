import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import hehe from './hehe.jpg';
import hehe2 from './hehe2.jpg';
import hehe3 from './hehe3.jpg';
import hehe4 from './hehe4.jpg';
import hehe5 from './hehe5.jpg';

const MainComponent = () => {
  return (
    <View>
      <Text style={styles.text}>DAFTAR BARANG</Text>
      <View
        style={{
          padding: 12,
          backgroundColor: '#ecf0f1',
          width: 212,
          borderRadius: 8,
          marginTop: 20,
          marginLeft: 95,
        }}>
        <Image
          source={hehe}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Liquid Art
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginLeft: 1,
            color: '#F2994A',
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Bogor Kota
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#F2994A',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#ecf0f1',
          width: 212,
          borderRadius: 8,
          marginTop: 20,
          marginLeft: 95,
        }}>
        <Image
          source={hehe2}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Abstract Art
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginLeft: 1,
            color: '#F2994A',
          }}>
          Rp. 30.000.000
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Bogor Kota
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#F2994A',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#ecf0f1',
          width: 212,
          borderRadius: 8,
          marginTop: 20,
          marginLeft: 95,
        }}>
        <Image
          source={hehe3}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Palm Art
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginLeft: 1,
            color: '#F2994A',
          }}>
          Rp. 35.000.000
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Bogor Kota
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#F2994A',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#ecf0f1',
          width: 212,
          borderRadius: 8,
          marginTop: 20,
          marginLeft: 95,
        }}>
        <Image
          source={hehe4}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Space Art
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginLeft: 1,
            color: '#F2994A',
          }}>
          Rp. 40.000.000
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Bogor Kota
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#F2994A',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#ecf0f1',
          width: 212,
          borderRadius: 8,
          marginTop: 20,
          marginLeft: 95,
        }}>
        <Image
          source={hehe5}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Waterpaint Art
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            marginLeft: 1,
            color: '#F2994A',
          }}>
          Rp. 45.000.000
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: 'bold',
            marginTop: 1,
            marginLeft: 1,
          }}>
          Bandung Kota
        </Text>
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#F2994A',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 130,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default MainComponent;
