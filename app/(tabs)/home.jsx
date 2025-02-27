import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';

const Home = () => {
  return (
    <SafeAreaView className="bg-stone-300 flex-1">
      <View className="w-full flex-1 px-4 py-4 pt-8">
        <View className="flex-row items-center justify-center mb-2">
          <Image
            source={images.logo}
            className="w-20 h-20"
            resizeMode="contain"
          />
          <Text className="text-black text-4xl font-bold mt-2 mr-3">
            SIGNQUEST
          </Text>
        </View>
        <View className="space-y-8 mt-4">
          <Text className="text-gray-700 text-lg leading-relaxed">
            Welcome to our app, designed to make learning Gujarati accessible for deaf and mute students. Using clear sign language tutorials and interactive exercises, we offer an engaging way to master the language. Our app ensures that every lesson is both enjoyable and easy to follow. Discover a new world of learning where communication barriers are broken and every student can succeed. <Text className='text-black font-bold  text-lg text-center'>
              Happy Learning!
            </Text>
          </Text>
          {/* <View className="items-center">
            <Text className='text-green-700 font-bold  text-lg text-center'>
              Happy Learning!
            </Text>
          </View> */}
          <Text className="text-gray-700 text-lg leading-relaxed">
            અમારા એપ્લિકેશનમાં આપનું સ્વાગત છે, જે મૌણ અને બાધિત મનોવિકારી વિદ્યાર્થીઓ માટે ગુજરાતી શીખવું સરળ બનાવે છે. સ્પષ્ટ સંકેત ભાષા ટ્યુટોરિયલ્સ અને ઇન્ટરેક્ટિવ વ્યાયામોનો ઉપયોગ કરીને, અમે ભાષા શિખવાની મજા અને આકર્ષક રીત પ્રદાન કરીએ છીએ. કાળા પૃષ્ઠભૂમિ સામે જીવંત રંગો સાથે યુઝર-ફ્રેન્ડલી ઇન્ટરફેસ, દરેક આનંદદાયક અને અનુરૂપ બનાવે છે. એક નવી શીખવાની દુનિયા શોધો જ્યાં સંચાર અવરોધો તૂટે છે અને દરેક વિદ્યાર્થીઓ સફળ થઈ શકે છે. <Text className='text-black font-bold text-lg text-center'>
              આનંદી શીખણ!
            </Text>
          </Text>
          {/* <View className="items-center">
            <Text className='text-rose-500 font-bold text-lg text-center'>
              આનંદી શીખણ!
            </Text>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;