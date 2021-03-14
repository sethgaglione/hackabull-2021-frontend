import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import axios from "axios";
import GetLocation from "react-native-get-location";

export default class EnergencySettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { location: "OKC, OK", date: "3/14/2021" },
        { location: "Tampa, Flordia", date: "3/14/2021" },
      ],
      date: "",
      location: "",
    };
  }

  // componentDidMount() {
  //   axios
  //     .get("https://hackabull-2021.herokuapp.com/getLogs", {
  //       token:
  //         "c991ed1738251c9f2c4c148ac39ea4491cf2c95dfa4a7236483ea547754e9e139eef4bc56d50deec75c1e6f43e1283c6b1e16956a0c5840845ed265f7bfbcce2c95285234a53e1f5efc19a99cad4e05010a5d51beb96ffe0b49280bde2625f9d717638387084672a4d5a4f47a133244f5ce2bf1ecb5d3fe4c469d9c0b3e69274aa4289dd903d0454fa35a412625f01391c6a7d1d46f58368b4eb50fa2859a5994464c3e050de063f44c35f06c77ceda420474fdd3059b68e41f90677a51c7a35860f5c6fee89df7716fa6138b988610a177e9b80ddbc4875a5ef6937b098ff7965bf755a5aa42b68ae058b1acfa3f07803905f3ce545548a2af0e79c4278a9b8",
  //     })
  //     .then((res) => {
  //       this.setState({ list: res.data.logs });
  //     });
  // }

  sendText() {
    axios
      .post("https://hackabull-2021.herokuapp.com/messages", {
        location: this.state.location,
        date: this.state.date,
      })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err.json()));
  }

  createNewLog() {
    var dateR = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setState({ date: month + "/" + dateR + "/" + year });

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((res) => {
        var loc = `lat:  + ${res.latitude} +  long:  + ${res.longitude}`;
        this.setState({ location: loc });
        console.log(this.state.location);
        console.log(this.state.date);
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });

    axios
      .post("https://hackabull-2021.herokuapp.com/createLog", {
        location: this.state.location,
        date: this.state.date,
        token:
          "c991ed1738251c9f2c4c148ac39ea4491cf2c95dfa4a7236483ea547754e9e139eef4bc56d50deec75c1e6f43e1283c6b1e16956a0c5840845ed265f7bfbcce2c95285234a53e1f5efc19a99cad4e05010a5d51beb96ffe0b49280bde2625f9d717638387084672a4d5a4f47a133244f5ce2bf1ecb5d3fe4c469d9c0b3e69274aa4289dd903d0454fa35a412625f01391c6a7d1d46f58368b4eb50fa2859a5994464c3e050de063f44c35f06c77ceda420474fdd3059b68e41f90677a51c7a35860f5c6fee89df7716fa6138b988610a177e9b80ddbc4875a5ef6937b098ff7965bf755a5aa42b68ae058b1acfa3f07803905f3ce545548a2af0e79c4278a9b8",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };
  //handling onPress action
  getListViewItem = (item) => {
    Alert.alert(item.status);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 40, width: 350 }}>
          <Button
            title="Log Current Location"
            color={"#BB0A21"}
            onPress={this.createNewLog.bind(this)}
          />

          <Text style={styles.p}>Previous Logs:</Text>

          <ScrollView style={styles.safe}>
            <FlatList
              renderItem={({ item }) => (
                <Text
                  style={styles.item}
                  onPress={this.getListViewItem.bind(this, item)}
                >
                  Time: {item.date} | Location: {item.location}
                </Text>
              )}
              ItemSeparatorComponent={this.renderSeparator}
              data={this.state.list}
            />
          </ScrollView>
          <Button
            title="Ping location to contacts"
            color={"#BB0A21"}
            onPress={this.sendText.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safe: { height: 100, marginBottom: 40 },
  p: {
    marginTop: 20,
    color: "black",
    fontSize: 20,
    color: "#BB0A21",
  },
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
