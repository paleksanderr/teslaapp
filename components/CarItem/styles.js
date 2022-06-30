import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: "100%",
  },
  carContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height ,
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
    textTransform: 'capitalize',
  },
  subTitleCTA: {
  
    textDecorationLine: "underline",
    fontWeight: "400",
  },
  
})

export default styles;