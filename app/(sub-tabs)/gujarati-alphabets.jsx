import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import DrawingPad from '../../components/DrawingPad';
import ImageAndAudio from '../../components/ImageAndAudio';
import PrevAndNext from '../../components/PrevAndNext';
import { audio, images } from '../../constants';

const GujaratiNumbers = () => {

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack('/learn-gujarati')
  }
  return (
    <SafeAreaView className="flex-1 bg-stone-300">
     <View className="relative flex-[0.36] justify-center items-center pt-16 ">
      <TouchableOpacity 
        onPress={handleBackPress} 
        className="bg-stone-600 absolute top-12 left-4 py-1 px-4 rounded-3xl"
      >
        <Text className="text-white font-psemibold text-base">Back</Text>
      </TouchableOpacity>
      </View>
      <View className="flex-[0.26] flex-row justify-between items-center px-8 ">
        <ImageAndAudio 
          imageSource={images.kha} 
          audioSource={audio.kha} />
      </View>

      <View className="flex-[0.40] pt-10 ">
        <DrawingPad />
        <PrevAndNext />
      </View>

    </SafeAreaView>
  );
};

export default GujaratiNumbers;
