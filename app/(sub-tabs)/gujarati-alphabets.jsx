import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DrawingPad from '../../components/DrawingPad'
import ImageAndAudio from '../../components/ImageAndAudio'
import PrevAndNext from '../../components/PrevAndNext'
import { audio, images } from '../../constants'

const GujaratiAlphabets = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#161622]">
    <View className="flex-1 justify-center items-center">

    </View>
    <ImageAndAudio 
      imageSource={images.kha}
      audioSource={audio.kha}
    />
    <View className="flex-1">
      <DrawingPad />
    </View>
    <PrevAndNext />
  </SafeAreaView>
  )
}

export default GujaratiAlphabets