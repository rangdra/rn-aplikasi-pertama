import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

const StylingRNComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          borderWidth: 10,
          borderColor: 'yellow',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          marginTop: 20,
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{marginTop: 16, fontWeight: 'bold', fontSize: 14}}>
          New Macbook Pro 2020
        </Text>
        <Text
          style={{
            marginTop: 14,
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
          }}>
          Rp. 25.000.000,-
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 12,
            fontWeight: '300',
          }}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 50,
            marginTop: 20,
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
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingRNComponent;
