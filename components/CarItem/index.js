import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

import styles from './styles'
import StyleButton from '../StyleButton/index';

export default function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelS.jpeg")}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>starting at 79,889$</Text>
      </View>
      <StyleButton type='primary' />
    </View>
  );
}