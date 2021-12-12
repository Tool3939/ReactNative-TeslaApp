import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  {
    const { type, content, onPress } = props;

    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFa6";
    const textColor = type !== "primary" ? "#171A20" : "#FFFFFF";

    return (
      <View style={styles.container}>
        <Pressable
          style={[styles.button, { backgroundColor: backgroundColor }]}
          onPress={() => onPress()}
        >
          <Text style={[styles.text, { color: textColor }]}>{content}</Text>
        </Pressable>
      </View>
    );
  }
};

export default StyledButton;
