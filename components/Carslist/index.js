import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import cars from "./cars";
import styles from "./styles";
import CarItem from "../CarItem";
import { Dimensions } from "react-native";
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default CarsList;
