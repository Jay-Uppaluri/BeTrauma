import { View, Text, Image } from 'react-native'
import React from 'react'

const RoadCart = () => {
  return (
    <View className='bg-primary' style={{height: "100%", width: "33%"}}>
        <Image source={require('../assets/images/road.png')} style={{height: "90%", width: "100%"}}/>
        <Image source={require('../assets/images/road.png')} style={{height: "90%", width: "100%", marginTop: -10, marginLeft: 1}}/>
    </View>
  )
}

export default RoadCart