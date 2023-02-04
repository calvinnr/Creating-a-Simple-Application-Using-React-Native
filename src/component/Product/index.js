import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import hehe from '../../assets/image/hehe.jpg';
import hehe2 from '../../assets/image/hehe2.jpg';
import hehe3 from '../../assets/image/hehe3.jpg';
import hehe4 from '../../assets/image/hehe4.jpg';
import hehe5 from '../../assets/image/hehe5.jpg';

const Product = (props) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={hehe} style={styles.imageProduct} />
        <Text style={styles.titleProduct}>Liquid Art</Text>
        <Text style={styles.priceProduct}>Rp. 25.000.000</Text>
        <Text style={styles.location}>Bogor Kota</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.textButton}>BELI</Text>
        </View>
        </TouchableOpacity>

      {/* <View style={styles.wrapper}>
        <Image source={hehe2} style={styles.imageProduct} />
        <Text style={styles.titleProduct}>Abstract Art</Text>
        <Text style={styles.priceProduct}>Rp. 30.000.000</Text>
        <Text style={styles.location}>Yogyakarta Kota</Text>
        <View style={styles.buttonWrapper}>
          <Text style={styles.textButton}>BELI</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Image source={hehe3} style={styles.imageProduct} />
        <Text style={styles.titleProduct}>Palm Art</Text>
        <Text style={styles.priceProduct}>Rp. 35.000.000</Text>
        <Text style={styles.location}>Surabaya Kota</Text>
        <View style={styles.buttonWrapper}>
          <Text style={styles.textButton}>BELI</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Image source={hehe4} style={styles.imageProduct} />
        <Text style={styles.titleProduct}>Space Art</Text>
        <Text style={styles.priceProduct}>Rp. 40.000.000</Text>
        <Text style={styles.location}>Jakarta Kota</Text>
        <View style={styles.buttonWrapper}>
          <Text style={styles.textButton}>BELI</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Image source={hehe5} style={styles.imageProduct} />
        <Text style={styles.titleProduct}>Waterpaint Art</Text>
        <Text style={styles.priceProduct}>Rp. 45.000.000</Text>
        <Text style={styles.location}>Bandung Kota</Text>
        <View style={styles.buttonWrapper}>
          <Text style={styles.textButton}>BELI</Text>
        </View> */}
      </View>
    </View>
    // </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  wrapper: {
    padding: 12,
    backgroundColor: '#ecf0f1',
    width: 212,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  titleProduct: {fontSize: 25, fontWeight: 'bold', marginLeft: 1},
  priceProduct: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 1,
    color: '#F2994A',
  },
  location: {fontSize: 11, fontWeight: 'bold', marginTop: 1, marginLeft: 1},
  buttonWrapper: {
    marginTop: 20,
    backgroundColor: '#F2994A',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 25,
  },
  textButton: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
