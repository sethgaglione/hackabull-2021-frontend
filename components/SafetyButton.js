import React, { Component } from "react";
import {
  TouchableHighlight,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Dialog from "react-native-dialog";

export default function SafetyButton() {
  const navigation = useNavigation();

  var [isPress, setIsPress] = React.useState(false);
  var [text, setText] = React.useState("Press");
  var [visible, setVisible] = React.useState(false);
  const [number, setNumber] = React.useState(null);
  const PIN = 1234;

  const checkPassword = () => {
    if (number == PIN) {
      setVisible(false);
    }
  };

  const released = () => {
    setText("Press");
    setVisible(true);
  };

  var touchProps = {
    activeOpacity: 1,
    underlayColor: "#BC4F5D",
    style: isPress ? styles.insideRoundButtonPressed : styles.insideRoundButton,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPressIn: () => setText("Hold"),
    onPressOut: () => released(),
  };

  var changeFunct = {};

  return (
    <View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Enter PIN</Dialog.Title>
        <Dialog.Input
          keyboardType="phone-pad"
          placeholder="ENTER PIN"
          maxLength={4}
          onChangeText={(number) => setNumber(number)}
          onSubmitEditing={() => checkPassword()}
        ></Dialog.Input>
      </Dialog.Container>

      <TouchableOpacity style={styles.roundButton}>
        <TouchableHighlight {...touchProps}>
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
