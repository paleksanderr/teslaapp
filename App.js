import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text styles={styles.subTitle}>starting at 79889$</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {},
  subTitle: {},
});
