import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "react-native-elements";

export default function EatScreen() {
  return (
    <SafeAreaView style={tw`flex-grow justify-center items-center bg-white`}>
      <Icon name="smiley" type="fontisto" size={150} style={tw`opacity-10`} />
      <View style={tw`flex-row gap-2 items-center opacity-20`}>
        <Text style={tw`text-lg font-semibold`}>Coming Soon!!</Text>
      </View>
    </SafeAreaView>
  );
}
