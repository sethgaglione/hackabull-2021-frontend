import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EnergencySettings() {
  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40, width: 350 }}>
        <Button
          title="Log Current Location"
          color={"#76B6D2"}
          onPress={() => navigation.navigate("Dashboard")}
        />
        <Text style={styles.p}>Previous Logs:</Text>
      </View>
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
  input: {
    height: 40,
    marginVertical: 10,
    width: 275,
    borderBottomColor: "#2978A0",
    borderBottomWidth: 1,
  },
});
