import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
// import Checkbox from "@mui/material/Checkbox";
import { db } from "../db/dbconfig";

import { collection, addDoc, setDoc } from "firebase/firestore";

import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function Acting({ navigation }) {
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // const [checked, setChecked] = React.useState(false);

  const [singleFile, setSingleFile] = useState([
    {
      name: "",
      dob: "",
      age: "",
      gender: "",
      height: "",
      currentLocation: "",
      experence: "",
      mobile: "",
      whatsapp: "",
      language: "",
      email: "",
      passport: "",
      Dl: "",
    },
  ]);
  const usercollectionref = collection(db, "users");

  const addData = async () => {
    await addDoc(usercollectionref, singleFile);
    alert("data added succecfully");
    navigation.navigate("Audition");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: 0
        }}
      >
        <Text style={{ fontSize: 40, marginTop: 10 }}>Acting</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 17 }}>Please Fill the form below</Text>
      </View>
      <View style={{ paddingTop: 5, paddingLeft: 60, paddingRight: 50 }}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome5 name="user-tie" size={20} />
          <TextInput
            placeholder="Full Name"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, name: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="birthday-cake" size={20} />
          <TextInput
            placeholder="Date of Birth"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, dob: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome5 name="user-tie" size={20} />
          <TextInput
            placeholder="Age"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, age: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <MaterialCommunityIcons name="gender-male-female" size={20} />
          <TextInput
            placeholder="Gender"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, gender: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <MaterialCommunityIcons name="human-male-height" size={20} />
          <TextInput
            placeholder="Height"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, height: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <MaterialIcons name="location-pin" size={20} />
          <TextInput
            placeholder="Current Location"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, currentLocation: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <AntDesign name="star" size={20} />
          <TextInput
            placeholder="Experience"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, experence: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <AntDesign name="mobile1" size={20} />
          <TextInput
            placeholder="Mobile"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, mobile: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="whatsapp" size={20} />
          <TextInput
            placeholder="Whatsapp"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, whatsapp: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="language" size={20} />
          <TextInput
            placeholder="Language"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, language: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <MaterialCommunityIcons name="email" size={20} />
          <TextInput
            placeholder="Email"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, email: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <Fontisto name="passport-alt" size={20} />
          <TextInput
            placeholder="Passport(Y/N)"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, passport: text });
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="car" size={20} />
          <TextInput
            placeholder="Driving Licence(Y/N)"
            style={{ fontSize: 17, paddingLeft: 15 }}
            onChangeText={(text) => {
              setSingleFile({ ...singleFile, Dl: text });
            }}
          />
        </View>
        <TouchableOpacity onPress={addData}>
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
              textAlign: "center",
            }}
          >
            submit
          </Text>
        </TouchableOpacity>
        {/* <View>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginBottom: 80,
              paddingLeft: 15,
            }}
          >
            Select the vehicles
          </Text>
          <Checkbox {...label} defaultChecked />
        </View> */}
      </View>
    </View>
  );
}
export default Acting;
