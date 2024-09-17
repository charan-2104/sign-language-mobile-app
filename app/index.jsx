import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function App() {
    return (
        <SafeAreaView className="bg-stone-300 h-full">
            <ScrollView
                contentContainerStyle={{ height:"100%", justifyContent: 'center' }}
            >
                <View className='w-full min-h-[85vh] px-4'>
                    <View className='flex-row items-center justify-center w-full'>
                        <Image 
                            source={images.logo} 
                            className='w-20 h-20'
                            resizeMode="contain"
                        />
                        <Text className='text-black text-4xl font-bold text-center'>
                            SIGNQUEST
                        </Text>
                    </View>

                    <View className='w-full mt-3'>
                        <Image 
                            source={images.bg}
                            className='max-w-[380px] w-full h-[300px]'
                            resizeMode="contain"
                        />
                    </View>

                    <View className='relative mt-3'>
                        <Text className='text-gray-700 text-3xl font-bold text-center items-center'>
                            Bridging Communication Gaps with Every{' '}
                                <Text className='text-purple'>Sign</Text>
                        </Text>
                    </View>

                    <Text className='text-gray-700 mt-7 text-center text-sm font-pregular'>
                        Unlock the world of Gujarati with our app an engaging adventure for deaf and mute students. Explore, learn, and connect with every sign!
                    </Text>

                    <CustomButton 
                        title="Continue With Email"
                        handlePress={() => router.push('sign-in')}
                        containerStyles='mt-7 w-full'
                    />
                </View>
            </ScrollView>
            {/* StatusBar is used to display the top bar since the background is dark */}
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}
