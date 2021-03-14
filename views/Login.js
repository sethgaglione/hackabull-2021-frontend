import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();

  const [user, onChangeUser] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [token, setToken] = React.useState("");
  function login() {
    axios
      .post("https://hackabull-2021.herokuapp.com/login", {
        username: user,
        password: password,
      })
      .then((res) => {
        console.log("logged in");
        global.token = res.data.token;
        console.log(global.token);
        navigation.navigate("Dashboard");
      })
      .catch((res) => {
        console.log("error in login");
      });
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 100 }}>
        <Text style={styles.h1}>Returning Users</Text>
        <TextInput
          style={styles.input}
          value={user}
          onChangeText={onChangeUser}
          placeholder="User"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={onChangePassword}
          placeholder="Password"
        />
        <Button title="Login" color={"#76B6D2"} onPress={() => login()} />
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
