import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const PrevAndNext = () => {

    handleNext = () => {}
    handlePrev = () => {}
  return (
    <View className="bg-primary flex-row justify-between items-center px-12 pb-4 h-16">
        <TouchableOpacity onPress={handlePrev} className="bg-secondary-200 mt-4 p-2 rounded-md">
          <Text className="text-black font-bold">Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} className="bg-secondary-200 mt-4 p-2 rounded-md">
          <Text className="text-black font-bold">Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PrevAndNext