import { View, FlatList, Dimensions } from 'react-native'
import React from 'react'

import CarItem from '../CarItem'
import styles from './styles'
import cars from './cars'

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList  
      data={cars}
      renderItem={({ item }) => <CarItem {...item} />}
      snapToAlignment="start"
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('screen').height}
      />
    </View>
  )
}

export default CarsList