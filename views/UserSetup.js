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
        onChangeText={firstName}
        value={onChangeFirst}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={lastName}
        value={onChangeLast}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={email}
        value={onChangeEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={username}
        value={onChangeUser}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={password}
        value={onChangePass}
        placeholder="Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={passwordCheck}
        value={onChangePassCheck}
        placeholder="Password Check"
      />
      <TextInput
        style={styles.input}
        onChangeText={phone}
        value={onChangePhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={dob}
        value={onChangeDob}
        placeholder="Date of Birth"
      />
      <Text style={styles.title}>Emergency Contact</Text>
      <TextInput
        style={styles.input}
        onChangeText={conOneName}
        value={onChangeConOneName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={conOnePhone}
        value={onChangeConOnePhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={conOneRelationship}
        value={onChangeConOneRelationship}
        placeholder="Relationship"
      />
      <Text style={styles.title}>Emergency Contact</Text>
      <TextInput
        style={styles.input}
        onChangeText={conTwoName}
        value={onChangeConTwoName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={conTwoPhone}
        value={onChangeConTwoPhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={conTwoRelationship}
        value={onChangeConTwoRelationship}
        placeholder="Relationship"
      />
      <Text style={styles.title}>Emergency Contact</Text>
      <TextInput
        style={styles.input}
        onChangeText={conThreeName}
        value={onChangeConThreeName}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={conThreePhone}
        value={onChangeConThreePhone}
        placeholder="Phone #"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={conThreeRelationship}
        value={onChangeConThreeRelationship}
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
