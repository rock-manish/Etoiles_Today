import React, { useState ,useEffect} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import { auth } from "../db/dbconfig";
import { onAuthStateChanged, signInWithEmailAndPassword ,getAuth} from "firebase/auth";
function Login({navigation}) {
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  // useEffect(() => {
  //   auth.onAuthStateChanged(
  //     users => {
  //       if(users){
  //         console.log(users)
  //         navigation.navigate("Login");
  //       } else {
  //          navigation.navigate("Hello");
  //       }
  //      }
  //   )
  
  //   return () => {
      
  //   }
  // }, [])
  

  const login = async () => {
   
    const auth1 = await getAuth();
    
    if (!loginemail && !loginpassword) { alert("Enter login credention") } else {
   
      try {
        // console.log(auth);
        const users = await signInWithEmailAndPassword(
          auth,
          loginemail,
          loginpassword
        );
        alert("login succesfully");
   
        if (auth1) {
          console.log(users)
          navigation.navigate("Hello");
        }
      
    
        // console.log(login);
        console.log(loginemail, loginpassword);
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  const logout = async () => {};
  return (
   
    <View
      style={{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"#B4F8C8"
        
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "black",
        }}
      >
        welcome
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "black",
        }}
      >
        sign in to continue
      </Text>

      <View>
        <Image
          style={{ width: 100, height: 100, marginTop: 30 }}
          source={require("./contect.webp")}
        />
      </View>

      
      <TextInput
      placeholder={"Email"}
        style={styles.input}
        onChangeText={(Text) => setLoginEmail(Text)}
        
      />
      <TextInput
        style={styles.input}
        
        placeholder="Password"
        secureTextEntry={true}
        maxLength={8}
        onChangeText={(Text) => setLoginPassword(Text)}
      />
      <TouchableOpacity onPress={login}>
        <Text
          style={{
            margin: 30,
            elevation: 5,
            paddingHorizontal: 40,
            paddingVertical: 7,
            color: "black",
            backgroundColor: "yellow",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    width:350,
    paddingLeft:30,
    fontSize:15,
    borderRadius:10,
    backgroundColor:"white"

  },
});
export default Login;
