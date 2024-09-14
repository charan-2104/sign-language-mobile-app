import React from 'react'
import { View } from 'react-native'
import AudioPlayer from './AudioPlayer'
import LetterImageDisplay from './LetterImageDisplay'

const ImageAndAudio = ({imageSource, audioSource}) => {
  return (
    <View className="flex-1 flex-row items-center px-12">
        <View className="flex-1 items-center ml-10">
          <LetterImageDisplay
            imageSource={imageSource}  
          />
        </View>
        <AudioPlayer
          audioSource={audioSource}
        />
    </View>
  )
}

export default ImageAndAudio