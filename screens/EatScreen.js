import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "react-native-elements";

export default function EatScreen() {
  return (
    <SafeAreaView style={tw`flex-grow justify-center items-center bg-white`}>
      <View style={tw`flex-row gap-2`}>
        <Icon name="smiley" type="fontisto" />
        <Text style={tw`text-lg font-semibold`}>Coming Soon!!</Text>
      </View>
    </SafeAreaView>
  );
}
