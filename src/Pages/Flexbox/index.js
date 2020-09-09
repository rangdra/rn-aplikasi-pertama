import React from 'react';
import {Text, View, Image} from 'react-native';
import macbook from '../../assets/images/macbook.jpg';

export default function Flexbox() {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Channel</Text>
        <Text>Komunitas</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={macbook}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View style={{marginLeft: 14}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Rangdra Pangestu
          </Text>
          <Text>5,8rb subscriber</Text>
        </View>
      </View>
    </>
  );
}

// lebar display - 50 = xxx / 3
