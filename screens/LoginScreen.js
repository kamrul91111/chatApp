import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {TextInput, Title, Button} from "react-native-paper";
import {primary} from "./../constants/Colors";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Title style={styles.mainTitle}>Login</Title>
      {/* textfields */}
      <View style={{margin: 20}}>
        <TextInput
          value={email}
          label="Email"
          placeholder="Please enter your email"
          onChangeText={text => setEmail(text)}
          mode="outlined"
          style={{backgroundColor: primary, margin: 2}}
        />
        <TextInput
          value={password}
          label="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry //for hiding password
          mode="outlined"
          placeholder="Please enter your password"
          style={{backgroundColor: "purple"}}
          style={{backgroundColor: primary, margin: 2}}
          //   theme={{colors: {primary: "white", underlineColor: "white"}}}
        />
        <Button mode="contained" style={{marginTop: 15}}>
          Login
        </Button>
        <Button
          onPress={() => navigation.navigate("Register")}
          style={{marginTop: 10}}
        >
          Don't have an account? register here
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
  },
  mainTitle: {
    textAlign: "center",
    padding: 30,
  },
});

export default LoginScreen;
