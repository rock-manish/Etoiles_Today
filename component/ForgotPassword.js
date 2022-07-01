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
function ForgotPassword({navigation}) {
  
  return (
      <View style={{flex:1,backgroundColor:"#fafad2 "}}>
    <View
      style={{
          flex:1,
        backgroundColor:"white"
        
      }}
    >
        <View style={{justifyContent:"center",alignItems:"center"}}>
      
      </View>

    

      {/* <View>
        <Image
          style={{ width: 100, height: 100, marginTop: 30 }}
          source={require("./contect.webp")}
        />
      </View> */}
<View style={{paddingLeft:15,paddingTop:80}}>
      <Text style={{fontSize:50}}>Forgot</Text>
      <Text style={{fontSize:50}}>Password</Text>
      <Text style={{paddingTop:20,fontSize:15,paddingBottom:5}}>Don't Worry! It happnes. Please enter associated with your account.</Text>

      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <TextInput
        style={styles.input}
        
        placeholder={"Email Id"}
        // keyboardType="numeric"
      />
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity>
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
          Submit
        </Text>
      </TouchableOpacity>
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity onPress={() => navigation.navigate("Login")}>
    <Text style={{fontSize:20}}>Back to Login</Text>
</TouchableOpacity>
</View>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:330,
    paddingLeft:30,
    fontSize:15,
    borderRadius:10,
    backgroundColor:"white"

  },
});
export default ForgotPassword;
