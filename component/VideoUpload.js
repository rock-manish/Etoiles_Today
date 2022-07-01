import * as Progress from 'react-native-progress';
import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, Text, View, Platform } from "react-native";
import { storage } from "../db/dbconfig";
import * as DocumentPicker from "expo-document-picker";
import Constants from "expo-constants";
import { ref, uploadBytes } from "firebase/storage";
// import {RNFetchBlob} from "rn-fetch-blob";
import * as MediaLibrary from "expo-media-library";

function Video({ navigation }) {
  useEffect(() => {
    (async () => {
      if (Constants.platform.ios || Constants.platform.android) {
        const cameraRollStatus =
          await MediaLibrary.getPermissionsAsync();
       
      }
    })();
  }, []);

  const [singleFile, setSingleFile] = useState("");
  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    // try {
    const res = await DocumentPicker.getDocumentAsync({
      type: "video/*",
      copyToCacheDirectory: true,
    });

    // console.log("res :- " + JSON.stringify(res));
    console.log("URI :- " + res.uri);
    console.log("Type :- " + res.type);
    console.log("File Name :- " + res.name);
    console.log("File Size :- " + res.size);

    // const path = await normalizeFile(res.uri);
    // console.log(path);
    await uploadfile(res);
    // } catch (err) {
    //   if (DocumentPicker.isCancel(err)) {
    //     //If user canceled the document selection
    //     alert("Canceled from single doc picker");
    //   } else {
    //     //For Unknown Errorr
    //     alert("Unknown Error: " + JSON.stringify(err));
    //     throw err;
    //     // }
    //   }
    // }
  };

  async function normalizeFile(path) {
    if (Platform.OS === "ios" || Platform.OS === "android") {
      const fileprefix = "file://";
      if (path.startsWith(fileprefix)) {
        path = path.substring(fileprefix.length);
        try {
          path = decodeURI(path);
        } catch (e) {}
      }
    }
    return path;
  }

  const uploadfile = async (res) => {
    const file = res;
    const storgaerRef = ref(storage, file.name);
   

    const img = await fetch(res.uri);
    
    const bytes = await img.blob();
    await uploadBytes(storgaerRef, bytes).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      navigation.navigate("Exit")
    });
  };

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
          fontSize: 60,
          color: "black",
          marginBottom: 30,
        }}
      >
        Create Video
      </Text>
      {/* <View style={{ borderWidth: 1, padding: 30, borderRadius: 20 }}>
        <Image 
          style={{ width: 200, height: 200, borderWidth: 1 }}
          source={require("./g1.jpg")}
        />
      </View> */}
      {/* <input type="file" onChange={uploadfile} /> */}

      <TouchableOpacity
        onPress={() => {
          selectOneFile();
        }}
      >
        <Image
          style={{ width: 200, height: 200, borderWidth: 1 }}
          source={require("./g1.jpg")}
        />
        {/* <input type="file" /> */}
      </TouchableOpacity>

      <TouchableOpacity >
        <Text
          style={{
            elevation: 5,
            margin: 30,
            marginTop: 20,
            paddingHorizontal: 40,
            paddingVertical: 7,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Upload
        </Text>
      </TouchableOpacity>
      <Progress.Bar progress={0.3} width={200} />

      
    </View>
  );
}

export default Video;
