import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from 'expo-router';

const Header = () => {
    const navigation = useNavigation()
  return (
    <View className='flex-row items-center'>
        <TouchableOpacity className='items-center justify-center ' onPress={() => navigation.canGoBack}>
            <AntDesign name="leftcircle" size={44} color="#FFA5A7" />
        </TouchableOpacity>
        <View className='px-14'>
        <Image 
            source={require('../assets/images/logo.png')}
            className="w-44 h-16  my-3 self-center"
        />
        </View>
    </View>
  )
}

export default Header