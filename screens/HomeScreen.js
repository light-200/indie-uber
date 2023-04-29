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
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../config/firebase";

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

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <SafeAreaView style={tw`gap-2 p-2`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Image
          style={{
            width: 120,
            height: 50,
            resizeMode: "contain",
          }}
          source={uber_logo}
        />
        <TouchableOpacity onPress={handleSignOut}>
          <Icon name="logout" type="antdesign" style={tw`mr-2`} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={tw`bg-gray-100 p-2 border-2 border-black border-opacity-10 rounded-md`}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <NavOptions handleSetOrigin={handleSetOrigin} />
      <NavFavourites handleLocation={handleSetOrigin} />
    </SafeAreaView>
  );
};

export default HomeScreen;
