import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Etoils from "./component/Etoils";
import Hello from "./component/Hello";
import Login from "./component/Login";
import Signup from "./component/Signup"; 
import ForgotPassword from "./component/ForgotPassword";
import Page from "./component/Page";
import Modeling from "./component/Modeling";
import Admin from "./component/Admin";
import Acting from "./component/Acting";
import Audition from "./component/Audition";
import VideoUpload from "./component/VideoUpload";
import Exit from "./component/Exit";
import Progess from "./component/Progess";


export default function App() {
  const Stacks = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stacks.Navigator>
        {/* <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        > */}
        {/* <Etoils></Etoils> */}
        {/* <Login></Login> */}
        {/* <Signup /> */}
        {/* <Hello></Hello> */}
        {/* <Text style={{ fontSize: 80 }}>Stack</Text> */}
        {/* <Page /> */}
        {/* <Modeling/> */}
        {/* <Payment/> */}
        {/* <Admin /> */}
        {/* </View> */}
        {/* <Singing/> */}
        {/* <Stacks.Screen name="Etoils" component={Etoils} /> */}
        <Stacks.Screen name="Login" component={Login}/>
        <Stacks.Screen name="Signup" component={Signup} />
        <Stacks.Screen name="Hello" component={Hello} />
        <Stacks.Screen name="Modeling" component={Modeling} />
        <Stacks.Screen name="Acting" component={Acting} />
        <Stacks.Screen name="Audition" component={Audition} />
        {/* <Stacks.Screen name="VideoUpload" component={VideoUpload} />
        <Stacks.Screen name="Exit" component={Exit} />
       <Stacks.Screen name="ForgotPassword" component={ForgotPassword} /> */}
       {/* <Stacks.Screen name="Progess" component={Progess} /> */}
        
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
