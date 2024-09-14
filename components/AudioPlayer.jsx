import { Audio } from 'expo-av'
import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import image from "../constants/icons"
const AudioPlayer = ({audioSource}) => {

  const [sound, setSound] = useState();

  const playSound = async () => {
    const {sound} = await Audio.Sound.createAsync(
      audioSource
    )
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={playSound}
      >
        <Image 
          source={image.speaker}
          style={{width:40, height:40}}
        />
      </TouchableOpacity>
    </View>
  )
}

export default AudioPlayer