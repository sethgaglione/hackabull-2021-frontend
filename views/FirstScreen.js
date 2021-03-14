import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LPRoundButton from "../components/LPRoundButton";
import { useNavigation } from "@react-navigation/native";

export default function FirstScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40, marginBottom: 100 }}>
        <Text style={styles.h1} h1>
          Welcome to Blue Safe
        </Text>
      </View>
      <LPRoundButton text={"Get Started"} redirect={"UserSetup"} />
      <View style={{ marginTop: 130, marginLeft: 200 }}>
        <Button
          title="Returning Users ->"
          color={"#76B6D2"}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
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
