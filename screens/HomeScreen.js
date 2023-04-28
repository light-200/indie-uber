import React from "react";
import { View, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uber_logo from "../assets/uber_logo.png";
import NavOptions from "../components/NavOptions";
import { useState } from "react";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const [text, setText] = useState(" ");
  const dispatch = useDispatch();

  const handleSetOrigin = (location) => {
    if (location) {
      setText(location);
    }
    dispatch(setOrigin(text));
    dispatch(setDestination(null));
  };

  return (
    <SafeAreaView style={tw`p-2`}>
      <View>
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
          }}
          source={uber_logo}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 2,
        }}
      >
        <TextInput
          style={tw`bg-gray-100 m-2 p-2 border-2 border-black border-opacity-10 rounded-sm flex-grow`}
          onChangeText={(text) => setText(text)}
          value={text}
        />
      </View>
      <NavOptions handleSetOrigin={handleSetOrigin} />
      <NavFavourites handleLocation={handleSetOrigin} />
    </SafeAreaView>
  );
};

export default HomeScreen;