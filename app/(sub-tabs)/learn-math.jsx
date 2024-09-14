import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from "../../components/CustomButton"
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const LearnMath = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="w-full flex-1 px-4 py-4">
      <View className="flex-grow justify-center">
          <View className="space-y-4">
            <CustomButton
              title="Learn Tables"
              handlePress={() => router.push('math-tables')}
              containerStyles="w-full"
            />
            <CustomButton
              title="Learn Basic Calculation"
              handlePress={() => router.push('math-calculations')}
              containerStyles="w-full"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LearnMath