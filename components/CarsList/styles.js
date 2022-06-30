import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height,
    
  }
})

export default styles;