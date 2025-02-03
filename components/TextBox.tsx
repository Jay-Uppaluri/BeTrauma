import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props ={
  Title: string;
  PlaceHolder: string;
  Icon: string
}

const TextBox= (props: Props) => {
  return (
    <View className='border border-primary flex-row items-center px-3 rounded-md mb-3'>
      <View className='pr-2'>
        {
          props.Icon === "Name" && (
            <FontAwesome name="user" size={24} color="#DB4537" />
          )
        }
        {
          props.Icon === "Email" && (
            <Ionicons name="mail" size={24} color="#DB4537" />
          )
        }
        {
          props.Icon === "Password" && (
            <FontAwesome name="lock" size={24} color="#DB4537" />
          )
        }
      </View>
        <TextInput 
          placeholder={props.PlaceHolder}
          className='py-3 pr-10 text-lg w-full '
          style={{fontFamily: 'Poppins-Medium'}}
        />
    </View>
  )
}

export default TextBox