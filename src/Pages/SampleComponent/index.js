import React, {Component} from 'react';
import {Text, View, Image, TextInput, Button} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: '100%', backgroundColor: '#b0b0b0'}}>
        <Text>Nama: </Text>
        <Name />
      </View>
      <Photo />
      <TextInput style={{borderWidth: 1, marginTop: 5, marginBottom: 10}} />
      <BoxGreen />
      <Button title="Learn More" color="#841584" />
    </View>
  );
};
const Name = () => {
  return <Text>Rangdra Pangestu</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return (
      <View style={{width: '100%', backgroundColor: 'green'}}>
        <Text>Ini Dari Class Component</Text>
        <Animals />
      </View>
    );
  }
}

class Animals extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text>Ini adalah Hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
