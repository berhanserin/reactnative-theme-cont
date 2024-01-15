import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useColorScheme} from 'nativewind';

const segmentCont = () => {
  const {setColorScheme, colorScheme} = useColorScheme();
  const {width: windowWidth} = Dimensions.get('window');
  const translateX = useSharedValue(0);
  const [select, setselect] = useState(colorScheme === 'dark' ? 0 : 1);

  const handlePress = () => {
    translateX.value =
      select == 0 ? 12 : ((windowWidth - 68) / 5) * select + 5 / select;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));

  const a = [
    {text: 'karanlık', schema: 'dark'},
    {text: 'aydınlık', schema: 'light'},
    {text: 'sistem', schema: 'system'},
  ];

  useEffect(() => {
    handlePress();
  }, [select]);

  return (
    <View className="bg-gray-300 p-5 w-11/12 rounded-3xl justify-center">
      <Animated.View
        className="absolute bg-white  top-3 w-20 h-9 rounded-3xl"
        style={animatedStyles}
      />
      <View className="justify-between flex-row mx-7">
        {a.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setselect(i);
                //@ts-ignore
                setColorScheme(item.schema);
              }}>
              <Text className="text-black">{item.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default segmentCont;
