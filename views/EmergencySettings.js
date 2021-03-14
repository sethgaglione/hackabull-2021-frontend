import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EnergencySettings() {
  const navigation = useNavigation();

  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.h1}>Returning Users</Text>

        <Button
          title="Login"
          color={"#76B6D2"}
          onPress={() => navigation.navigate("Dashboard")}
        />
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
