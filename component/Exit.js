import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import { getAuth, signOut } from "firebase/auth";


function Exit() {

  const signOut = async() => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });

  }

  return (
    <View>
    <View style={{justifyContent:"flex-end",alignItems:"flex-end",paddingRight:20,paddingTop:10}}>
    <TouchableOpacity>
        <Text style={{fontSize:20,fontWeight:"bold"}}>LogOut</Text>
      </TouchableOpacity>
      </View>
    <View
      style={{
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}

      
    >
      <Text style={{ fontSize: 60, marginBottom: 80, color: "black" }}>
        Thank You
      </Text>
      <Image
        style={{ width: 400, height: 200, marginBottom: 20 }}
        source={require("./ETOILES.png")}
      />

      <TouchableOpacity
        onPress={() => { signOut()
         
         
        }}
      >
        <Text
          style={{
            margin: 40,
            elevation: 5,
            paddingHorizontal: 60,
            backgroundColor: "yellow",
            borderRadius: 30,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Exit
        </Text>
      </TouchableOpacity>
      
    </View>
    </View>
  );
}

export default Exit;
