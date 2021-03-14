import React, { Component } from "react";
import {
  TouchableHighlight,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SafetyButton({ redirect }) {
  const navigation = useNavigation();

  var [isPress, setIsPress] = React.useState(false);
  var [text, setText] = React.useState("Press");

  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#BC4F5D", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: isPress ? styles.insideRoundButtonPressed : styles.insideRoundButton, // <-- but you can still apply other style changes
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log("HELLO"), // <-- "onPress" is apparently required
    //Need it to change back to Press when it isn't being held anymore
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(redirect)}
        style={styles.roundButton}
      >
        <TouchableHighlight
          onPress={() => navigation.navigate(redirect)}
          {...touchProps}
        >
          <View>
            <Text style={{ color: "white", fontSize: 19 }}>{text}</Text>
          </View>
        </TouchableHighlight>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  insideRoundButtonPressed: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "black",
  },
  insideRoundButton: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#76B6D2",
  },
  roundButton: {
    margin: 50,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "white",
    borderColor: "rgba(112, 112, 112, 100)",
    borderWidth: 1,
  },
});
