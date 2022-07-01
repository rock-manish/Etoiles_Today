import { View, Text ,TextInput} from 'react-native'
import React from 'react'

import Entypo from "react-native-vector-icons/Entypo";

const icon = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", borderWidth: 2, width: 300 }}>
        <Entypo name="user" size={30} color="black" />
        <TextInput placeholder="Email" style={{}}></TextInput>
      </View>
    </View>
  );
}

export default icon