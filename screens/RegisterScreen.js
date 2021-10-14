import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {TextInput, Title, Button} from "react-native-paper";

// grab firebase functions
import {auth} from "../api/firebase";

//constant
import {primary} from "./../constants/Colors";

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(""); //avatar
  const [error, setError] = useState(); //error message from firebase

  useEffect(() => {
    // cleanup
    return () => {
      setError();
    };
  }, []);

  // register function
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(error => setError(error.message));
  };

  return (
    <View style={styles.container}>
      <Title style={styles.mainTitle}>Register</Title>
      {/* textfields */}
      <View style={{margin: 20}}>
        <TextInput
          value={name}
          label="Name"
          placeholder="Please enter your name"
          onChangeText={text => setName(text)}
          mode="outlined"
          style={{backgroundColor: primary, margin: 2}}
        />
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
        {/* if error exists, show that */}
        {error ? <Text style={{textAlign: 'center', color: 'red'}}>{error}</Text> : null}
        <Button onPress={register} mode="contained" style={{marginTop: 15}}>
          Register
        </Button>
        <Button
          onPress={() => navigation.navigate("Login")}
          style={{marginTop: 10}}
        >
          Already have an account? Login here
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

export default RegisterScreen;
