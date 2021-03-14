import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SmallNav from "../components/SmallNav";
import SafetyButton from "../components/SafetyButton";

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SmallNav />
      <SafetyButton />
      <Text style={{ color: "#BB0A21", width: 310, textAlign: "center" }}>
        Keep holding until you feel safe. You will be asked to enter a pin when
        you let go. IF you don't enter that pin in 15 seconds, then your
        location will be pinged and authorities called.
      </Text>
      <Button
        title="Emergency Settings"
        color={"#BB0A21"}
        style={styles.EmergencySettingsBtn}
        onPress={() => navigation.navigate("Emergency")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  EmergencySettingsBtn: {
    marginTop: 40,
  },
  SmallNav: {
    alignSelf: "stretch",
    height: 90,
    backgroundColor: "#425F6E",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F1FDFF",
    alignItems: "center",
  },
});
