import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from "../../components/CustomButton"
import { router } from 'expo-router'

const LearnGujarati = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="w-full flex-1 px-4 py-4">
      <View className="flex-grow justify-center">
          <View className="space-y-4">
            <CustomButton
              title="Gujarati Alphabets"
              handlePress={() => router.push('gujarati-alphabets')}
              containerStyles="w-full"
            />
            <CustomButton
              title="Gujarati Numbers"
              handlePress={() => router.push('gujarati-numbers')}
              containerStyles="w-full"
            />
            <CustomButton
              title="Gujarati Words"
              handlePress={() => router.push('gujarati-words')}
              containerStyles="w-full"
            />
            <CustomButton
              title="Gujarati Sentences"
              handlePress={() => router.push('gujarati-sentences')}
              containerStyles="w-full"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LearnGujarati