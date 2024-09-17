import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomButton from "../../components/CustomButton"
import { useRouter } from 'expo-router';

const Learning = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-stone-300 flex-1">
      <View className="w-full flex-1 px-4 py-4">
        {/* <View className="flex-row items-center justify-center mb-8">
          <Image
            source={images.icon}
            className="w-16 h-16"
            resizeMode="contain"
          />
          <Text className="text-white text-4xl font-bold ml-2 mt-5">
            SIGNQUEST
          </Text>
        </View> */}

        <View className="flex-grow justify-center">
          <View className="space-y-4">
            <CustomButton
              title="Learn Gujarati"
              handlePress={() => router.push('learn-gujarati')}
              containerStyles="w-full"
            />
            <CustomButton
              title="Learn Math"
              handlePress={() => router.push('learn-math')}
              containerStyles="w-full"
            />
            <CustomButton
              title="Learn Science"
              handlePress={() => router.push('learn-science')}
              containerStyles="w-full"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Learning
