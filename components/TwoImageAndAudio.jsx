import { View, Text } from 'react-native'
import React from 'react'
import LetterImageDisplay from './LetterImageDisplay'
import AudioPlayer from './AudioPlayer'
import { images } from '../constants'

const TwoImageAndAudio = ({imageSource, imageSource2, audioSource}) => {
  return (
    <View className="flex-1 flex-row items-center px-12">
      <View className="flex-1 flex-row justify-between items-center">
        <View className="flex-shrink-0">
          <LetterImageDisplay imageSource={imageSource} />
        </View>
        <View className="flex-1 items-center">
          <LetterImageDisplay imageSource={imageSource2} />
        </View>
        <View className="flex-shrink-0">
          <AudioPlayer audioSource={audioSource} />
        </View>
      </View>
    </View>
  )
}

export default TwoImageAndAudio