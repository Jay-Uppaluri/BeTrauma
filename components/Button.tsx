import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props ={
  Title: string;
  Onpress: () => void
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity className='bg-primary items-center rounded-lg' onPress={props.Onpress}>
      <Text className='text-lg py-4 text-background' style={{fontFamily: 'Poppins-Medium'}}>{props.Title}</Text>
    </TouchableOpacity>
  )
}

export default Button