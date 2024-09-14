import { View, Text } from 'react-native'
import React from 'react'
import LetterImageDisplay from '../../components/LetterImageDisplay'
import DrawingPad from '../../components/DrawingPad'
import { audio, images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import PrevAndNext from '../../components/PrevAndNext'
import ImageAndAudio from '../../components/ImageAndAudio'
import AudioPlayer from '../../components/AudioPlayer'
import TwoImageAndAudio from '../../components/TwoImageAndAudio'

const GujaratiWords = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#161622]">
    <View className="flex-1 justify-center items-center">

    </View>

    {/* <View className="flex-1 flex-row items-center px-12">
      <View className="flex-1 flex-row justify-between items-center">
        <View className="flex-shrink-0">
          <LetterImageDisplay imageSource={images.dog} />
        </View>
        <View className="flex-1 items-center">
          <LetterImageDisplay imageSource={images.doggu} />
        </View>
        <View className="flex-shrink-0">
          <AudioPlayer audioSource={audio.dog} />
        </View>
      </View>
    </View> */}

    <TwoImageAndAudio
      imageSource={images.dog}
      imageSource2={images.doggu}
      audioSource={audio.dog}
    />


    <View className="flex-1">
      <DrawingPad />
    </View>
    <PrevAndNext />
  </SafeAreaView>
  )
}

export default GujaratiWords