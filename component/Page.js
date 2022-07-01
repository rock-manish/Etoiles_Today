import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function Online() {
  return (
    <View
      style={{
        marginTop: 100,
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
        Audition
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        Select mode of audition{" "}
      </Text>
      <TouchableOpacity
        style={{ marginTop: 50 }}
        onPress={() => {
          console.log("Click here");
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            paddingHorizontal: 30,
            paddingVertical: 7,
            elevation: 5,
            marginTop: 70,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
          }}
        >
          Offline
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log("Click here");
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            paddingHorizontal: 30,
            paddingVertical: 7,
            elevation: 5,
            marginTop: 60,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
          }}
        >
          Online
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Online;