import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './styles'

const StyleButton = () => {
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