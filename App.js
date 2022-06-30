import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CarItem from "./components/CarItem/index.js";

export default function App() {
  return (
    <View style={styles.container}>
        <CarItem 
        name={'Model X'} 
        tagline={'starts from 99,999'} 
        image={require('./assets/images/ModelX.jpeg')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
