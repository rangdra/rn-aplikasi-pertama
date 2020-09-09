import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import SampleComponent from '../src/Pages/SampleComponent';
import StylingRNComponent from '../src/Pages/StylingRNComponent';
import Flexbox from '../src/Pages/Flexbox';
import PositionsRN from '../src/Pages/PositionsRN';

const App = () => {
  const [angka, setAngka] = useState(8);
  useEffect(() => {
    console.log('component Did Mount');
    setAngka(100);
    return () => {
      console.log('did update');
    };
  }, [angka]);
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingRNComponent />
        <Flexbox />
        <PositionsRN />
        <Text>{angka}</Text>
      </ScrollView>
    </View>
  );
};

export default App;

// Note
// Klo ingin menggunakan Image jgn lupa mengatur width dan heigth nya
// jgn lupa import component dari react native nya
