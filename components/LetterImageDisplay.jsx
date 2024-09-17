import React from 'react';
import { View, Text, Image } from 'react-native';

const LetterImageDisplay = ({ imageSource }) => {
  return (
    <View className="flex items-center justify-center rounded-lg shadow-lg">
      <Image
        source={imageSource}
        className="w-36 h-36"
        resizeMode="contain"
      />
    </View>
  );
};

export default LetterImageDisplay;
