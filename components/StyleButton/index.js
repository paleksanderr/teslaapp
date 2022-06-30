import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './styles'

const StyleButton = (props) => {

  const type = props.type;
  const backgroundColor = type === 'primary' ? '#00a8ff' : '#fff';

  return (
    <View style={styles.container}>
      <Pressable
      style={styles.button}
      onPress={() => {
        console.warn('pressed')
      }}
      >
      <Text style={styles.buttonText}>Custom order</Text>
      </Pressable>
    </View>
  )
}

export default StyleButton