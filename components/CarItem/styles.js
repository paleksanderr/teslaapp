import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: "100%",
  },
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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "300",
    color: "#5c5e62",
  },
})

export default styles;