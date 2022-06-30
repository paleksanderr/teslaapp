import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './styles'

const StyleButton = (props) => {

  const type = props.type;
  
  const backgroundColor = type === 'primary' ? 'black' : 'white';
  const textColor = type === 'primary' ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Pressable
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={() => {
        console.warn('pressed')
      }}
      >
      <Text style={[styles.buttonText, {color: textColor}]}>Custom order</Text>
      </Pressable>
    </View>
  )
}

export default StyleButton