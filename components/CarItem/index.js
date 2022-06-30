import { View, Text, ImageBackground } from "react-native";
import React from "react";

import styles from "./styles";
import StyleButton from "../StyleButton/index";

export default function CarItem(props) {

    const { name , tagline, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom order was pressed");
          }}
        />
        <StyleButton
          type="secondary"
          content={"Existing inventory"}
          onPress={() => {
            console.warn("existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
}
