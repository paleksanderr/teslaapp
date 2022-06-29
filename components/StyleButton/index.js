import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './styles'

const StyleButton = () => {
  return (
    <View>
      <Pressable
      style={styles.button}
      onPress={() => {
        alert('You tapped the button!')
      }}
      >

      </Pressable>
    </View>
  )
}

export default StyleButton