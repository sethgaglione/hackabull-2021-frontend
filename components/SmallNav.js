import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PP from "../assets/PP.png";

export default function SmallNav({ redirect, text }) {
  const navigation = useNavigation();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  var FullDate = months[month] + " " + date + ", " + year;

  return (
    <View style={styles.SmallNav}>
      <View style={styles.FlexBox}>
        <View style={styles.FlexRow}>
          <View style={styles.FlexColumn}>
            <Text style={{ color: "white", fontSize: 35, paddingLeft: 5 }}>
              Dashboard
            </Text>
            <Text style={{ color: "white", fontSize: 15, paddingLeft: 5 }}>
              {FullDate}
            </Text>
          </View>
          <Image
            style={{
              width: 75,
              height: 75,
              alignItems: "center",
              justifyContent: "center",
            }}
            source={PP}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FlexBox: {
    alignSelf: "stretch",
    height: 90,
    padding: 5,
  },

  FlexRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  FlexColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  SmallNav: {
    alignSelf: "stretch",
    height: 90,
    backgroundColor: "#425F6E",
    justifyContent: "center",
  },
  image: {
    width: 50,
  },
});
