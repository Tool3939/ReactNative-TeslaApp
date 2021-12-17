import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import cars from "./cars";
import styles from "./styles";
import CarItem from "../CarItem";
const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList data={cars} renderItem={({ item }) => <CarItem car={item} />} />
    </View>
  );
};

export default CarsList;
