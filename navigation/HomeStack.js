import React from "react";
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

// screens
import LoginScreen from "./../screens/LoginScreen";
import RegisterScreen from './../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "purple", //header label color
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: "", //removes header title
          headerStyle: {
            backgroundColor: "#E0E0E2", //change header color
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerTitle: "", //removes header title
          headerStyle: {
            backgroundColor: "#E0E0E2", //change header color
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
