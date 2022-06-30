import { View, Text, Pressable } from 'react-native'
import React from 'react'

import styles from './styles'

const StyleButton = (props) => {

  const type = props.type;
  const content = props.content;
  const onPress = props.onPress;
  
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA2';
  const textColor = type === "primary" ? "#FFFFFFA2" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={() => {
        onPress();
      }}
      >
      <Text style={[styles.buttonText, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyleButton