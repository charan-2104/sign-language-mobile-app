import React from 'react';
import { SafeAreaView, View } from 'react-native';
import AnimationVideo from '../../components/AnimationVideo';
import DrawingPad from '../../components/DrawingPad';
import ImageAndAudio from '../../components/ImageAndAudio';
import { animation, audio, images } from '../../constants';
import PrevAndNext from '../../components/PrevAndNext';

const GujaratiNumbers = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#161622]">
      <View className="flex-1 justify-center items-center">
        <AnimationVideo 
          animateSource={animation.two}
        />
      </View>
      <ImageAndAudio 
        imageSource={images.two}
        audioSource={audio.two}
      />
      {/* <View className="flex-1 flex-row items-center px-12">
        <View className="flex-1 items-center ml-10">
          <LetterImageDisplay 
            imageSource={images.two}  
          />
        </View>
        <AudioPlayer 
          audioSource={audio.two}
        />
      </View> */}
      <View className="flex-1">
        <DrawingPad />
      </View>
      <PrevAndNext />
    </SafeAreaView>
  );
};

export default GujaratiNumbers;
