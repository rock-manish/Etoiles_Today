import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

function Hello({navigation}) {
  return (
    <View
      style={{
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 70,
          color: "black",
        }}
      >
        hello
      </Text>

      <Text
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        Select your option
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Modeling")}>
        <Text
          style={{
            elevation: 5,
            margin: 30,
            marginTop: 80,
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Modeling
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Acting")}>
        <Text
          style={{
            margin: 30,
            elevation: 5,
            paddingHorizontal: 40,
            paddingVertical: 15,
            color: "black",
            backgroundColor: "yellow",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Acting
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate("Writing")}>
        <Text
          style={{
            margin: 30,
            elevation: 5,
            paddingHorizontal: 40,
            paddingVertical: 15,
            color: "black",
            backgroundColor: "yellow",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Writing
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}
 export default Hello;