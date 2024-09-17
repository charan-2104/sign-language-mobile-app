import { View, Text } from 'react-native';
import React from 'react';
import LetterImageDisplay from './LetterImageDisplay';
import AudioPlayer from './AudioPlayer';
import { images } from '../constants';

const TwoImageAndAudio = ({ imageSource, imageSource2, audioSource }) => {
  return (
    <View className="flex-1 ">
      <View className="flex-row justify-between items-center">
        <View className="flex-1 items-center mr-1 ml-1">
          <LetterImageDisplay imageSource={imageSource} />
        </View>
        <View className="flex-1 items-center mr-2 ml-2">
          <LetterImageDisplay imageSource={imageSource2} />
        </View>
        <View className="flex-shrink-0 px-2  mr-2">
          <AudioPlayer audioSource={audioSource} />
        </View>
      </View>
    </View>
  );
};

export default TwoImageAndAudio;
