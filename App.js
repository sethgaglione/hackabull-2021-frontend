import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import UserSetup from "./views/UserSetup";
import FirstScreen from "./views/FirstScreen";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import EmergencySettings from "./views/EmergencySettings";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ title: "Getting Started" }}
        />
        <Stack.Screen
          name="UserSetup"
          component={UserSetup}
          options={{ title: "User Setup" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Emergency Settings"
          component={EmergencySettings}
          options={{ title: "EmergencySettings" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <StackNavigator />;
}
