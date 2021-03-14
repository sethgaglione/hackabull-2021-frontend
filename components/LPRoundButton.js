import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LP from "../assets/lifePreserver.png";

export default function LPRoundButton({ redirect, text }) {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        style={{
          width: 250,
          height: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
        source={LP}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(redirect)}
          style={styles.roundButton}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(redirect)}
            style={styles.insideRoundButton}
          >
            <View>
              <Text style={{ color: "white", fontSize: 19 }}>{text}</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  insideRoundButton: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#76B6D2",
  },
  roundButton: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "white",
    borderColor: "rgba(112, 112, 112, 100)",
    borderWidth: 1,
  },
});
