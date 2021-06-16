// 5
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../actions/actionTypes";
import store from "../store";
import { RootState } from "../reducers";
const Counter = () => {
  // 8
  const dispatch = useDispatch();
  // 9
  const value = useSelector((state: RootState) => state.counterReducers);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redux Saga</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => store.dispatch({ type: INCREMENT, payload: value })}
        >
          <Text style={styles.titleButton}>INCREMENT +</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => store.dispatch({ type: DECREMENT, payload: value })}
        >
          <Text style={styles.titleButton}>DECREMENT -</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Count: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  titleButton: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Counter;
