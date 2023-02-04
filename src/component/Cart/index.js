import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import cart from '../../assets/icons/cart.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    Wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#ecf0f1',
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 25,
    position: 'absolute',
    top: 0,
    right: 0,
  },
})