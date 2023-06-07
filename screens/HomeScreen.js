import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import { HeroScreen } from '../assets';
import { TouchableOpacity } from 'react-native';




const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
   <SafeAreaView className="bg-white flex-1 relative">
    {/* First section */}
    <View className="flex-row px-3 mt-10 items-center space-x-3 ">
        <View className="w-16 h-16 bg-black    rounded-full items-center justify-center">
            <Text className="text-[#00BCC9] text-2xl font-semibold ">Let's</Text>
        </View>
        <Text className="text-[#04245a] font-semibold text-2xl">Travel</Text>
    </View>
    {/* Second section */}
    <View className="px-3 mt-8 space-y-2">
            <Text className="text-[#2d4c80] text-[35px]">Enjoy the trip with</Text>
            <Text className="text-[#00BCC9] text-[35px] font-bold">Good Moments</Text>
            <Text className="text-[#2d4c80] text-[14px]">
                Share the World and become an amazing traveler. Find thousands of tourist destinations ready for you to visit
            </Text> 
    </View>
    {/* Circle section */}
    <View className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute -bottom-12 -right-40"></View>
    <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-40 -left-36"></View>
    
    {/* Image Container */}
    <View className="flex-1 relative items-center justify-center">
        <Animatable.Image 
        animation="fadeIn"
        easing="ease-in-out"
        source={HeroScreen} className="w-full h-full object-cover "/>
    <TouchableOpacity 
    onPress={()=>navigation.navigate("Discover")}
    className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
    
    <Animatable.View
    animation="pulse"
    easing="ease-in-out"
    iterationCount={"infinite"}
     className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
        <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
    </Animatable.View>

    </TouchableOpacity> 
    </View>
        
    
    
   </SafeAreaView>
  );
}

export default HomeScreen