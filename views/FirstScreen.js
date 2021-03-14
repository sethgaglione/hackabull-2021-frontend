import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LPRoundButton from "../components/LPRoundButton";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40, marginBottom: 130 }}>
        <Text style={styles.h1} h1>
          Welcome to Blue Safe
        </Text>
      </View>
      <LPRoundButton text={"Get Started"} redirect={"UserSetup"} />
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
});
