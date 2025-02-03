import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const CheckBox = () => {
    const [isChecked, setChecked] = useState(true);
  return (
    <View>
      <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#DB4537' : undefined}
        />
    </View>
  )
}

export default CheckBox

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      marginVertical: 32,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
  });