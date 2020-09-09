import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';
export default function PositionsRN() {
  return (
    <View style={styles.Xwrapper}>
      <Text>Materi Position</Text>
      <View style={styles.wrapper}>
        <Image source={macbook} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>

      <Text style={styles.text}>Macbook Pro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Xwrapper: {margin: 50, alignItems: 'center'},
  wrapper: {
    borderWidth: 2,
    borderColor: 'red',
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20,
  },
  text: {marginTop: 8, fontWeight: '700', fontSize: 12, color: '#777777'},
  iconCart: {
    width: 50,
    height: 50,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 25,
    width: 25,
    height: 25,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
