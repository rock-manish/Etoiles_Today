import React from "react";
import { StyleSheet,TouchableOpacity, Image,Text, View } from "react-native";

function Etoils({navigation}) {
  return (
    <View
      style={{
        marginTop: 120,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 300, height: 200 }}
        source={require("./ETOILES.png")}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            elevation: 5,
            paddingHorizontal: 75,
            paddingVertical: 10,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
  
        <Text
          style={{
            margin: 40,
            elevation: 5,
            paddingHorizontal: 60,
            paddingVertical: 10,
            color: "black",
            backgroundColor: "yellow",
            borderRadius: 30,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Etoils;