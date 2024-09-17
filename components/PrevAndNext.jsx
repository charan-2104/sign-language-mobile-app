import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PrevAndNext = () => {

    const handleNext = () => {};
    const handlePrev = () => {};

    return (
        <View className="bg-stone-300 flex-row justify-between items-center px-14 h-16">
            <TouchableOpacity onPress={handlePrev} className="bg-stone-500 py-2 px-6 rounded-full">
                <Icon name="arrow-left" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext} className="bg-stone-500 py-2 px-6 rounded-full"> 
                <Icon name="arrow-right" size={20} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );
}

export default PrevAndNext;
