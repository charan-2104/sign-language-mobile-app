import { Video } from 'expo-av'
import React from 'react'

const AnimationVideo = ({animateSource}) => {
  return (
    <Video 
      source={animateSource}
      useNativeControls
      resizeMode='contain'
      shouldPlay={true}
      isLooping={true}
      style={{ width: '100%', height: 190 }}
    />

  )
}

export default AnimationVideo