import { View, Text } from 'react-native'
import * as Progress from 'react-native-progress';
import React from 'react'

const Progess = () => {
  return (
    <View>
      

<Progress.Bar progress={0.3} width={200} />
{/* <Progress.Pie progress={0.4} size={50} /> */}
{/* <Progress.Circle size={30} indeterminate={true} /> */}
{/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}
    </View>
  )
}

export default Progess