import React from "react";
import { ScrollView, StyleSheet, TextInput, Text } from "react-native";

export default function UserSetup() {
  const [firstName, onChangeFirst] = React.useState(null);
  const [lastName, onChangeLast] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [username, onChangeUser] = React.useState(null);
  const [password, onChangePass] = React.useState(null);
  const [passwordCheck, onChangePassCheck] = React.useState(null);
  const [phone, onChangePhone] = React.useState(null);
  const [dob, onChangeDob] = React.useState(null);
  const [conOneName, onChangeConOneName] = React.useState(null);
  const [conTwoName, onChangeConTwoName] = React.useState(null);
  const [conThreeName, onChangeConThreeName] = React.useState(null);
  const [conOneRelationship, onChangeConOneRelationship] = React.useState(null);
  const [conTwoRelationship, onChangeConTwoRelationship] = React.useState(null);
  const [conThreeRelationship, onChangeConThreeRelationship] = React.useState(
    null
  );
  const [conOnePhone, onChangeConOnePhone] = React.useState(null);
  const [conTwoPhone, onChangeConTwoPhone] = React.useState(null);
  const [conThreePhone, onChangeConThreePhone] = React.useState(null);

  return (
    <ScrollView style={{ backgroundColor: "#F1FDFF" }}>
      <Text style={styles.title}>Personal Information</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={onChangeFirst}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={onChangeLast}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={onChangeUser}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={onChangePass}
        placeholder="Password"
      />
      <TextInput
        style={styles.input}
        value={passwordCheck}
        onChangeText={onChangePassCheck}
        placeholder="Password Check"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={onChangePhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={onChangeDob}
        placeholder="Date of Birth"
      />
      <Text style={styles.title}>Emergency Contact</Text>
      <TextInput
        style={styles.input}
        value={conOneName}
        onChangeText={onChangeConOneName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={conOnePhone}
        onChangeText={onChangeConOnePhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={conOneRelationship}
        onChangeText={onChangeConOneRelationship}
        placeholder="Relationship"
      />
      <Text style={styles.title}>Emergency Contact</Text>
      <TextInput
        style={styles.input}
        value={conTwoName}
        onChangeText={onChangeConTwoName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={conTwoPhone}
        onChangeText={onChangeConTwoPhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={conTwoRelationship}
        onChangeText={onChangeConTwoRelationship}
        placeholder="Relationship"
      />
      <Text style={styles.title}>Emergency Contact</Text>
      <TextInput
        style={styles.input}
        value={conThreeName}
        onChangeText={onChangeConThreeName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={conThreePhone}
        onChangeText={onChangeConThreePhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={conThreeRelationship}
        onChangeText={onChangeConThreeRelationship}
        placeholder="Relationship"
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomColor: "#2978A0",
    borderBottomWidth: 1,
  },
  title: {
    color: "#2978A0",
    paddingLeft: 10,
    paddingVertical: 10,
    fontSize: 25,
  },
});
