import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { UserSetup } from "./views/UserSetup";

export default function App() {
  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.h1} h1>
          Blue Safe
        </Text>
      </View>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton}
      >
        <TouchableOpacity style={styles.insideRoundButton}>
          <Text style={{ color: "white" }}>Get Started</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1FDFF",
    alignItems: "center",
  },
  h1: {
    color: "#425F6E",
    fontSize: 30,
    marginTop: 40,
  },
  insideRoundButton: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgba(118, 182, 210, 100)",
    borderColor: "rgba(112, 112, 112, 100)",
    borderWidth: 1,
  },
  roundButton: {
    marginTop: 200,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgba(123,174,200,60)",
    borderColor: "rgba(112, 112, 112, 100)",
    borderWidth: 1,
  },
});
