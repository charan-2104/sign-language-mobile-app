import React from 'react';
import { View, Text, Image } from 'react-native';

const LetterImageDisplay = ({ imageSource }) => {
  return (
    <View className="flex items-center justify-center bg-gray-700  rounded-lg shadow-lg">
      <Image
        source={imageSource}
        className="w-24 h-24"
        resizeMode="contain"
      />
    </View>
  );
};

export default LetterImageDisplay;
