import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import NavFavourites from "./NavFavourites";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NavigateCard() {
  const [destination, setDestinationState] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDestination = () => {
    destination && dispatch(setDestination(destination));
    navigation.navigate("RideOptionsCard");
  };

  const handleFavSelect = (location) => {
    if (location) {
      setDestinationState(location);
    }
  };

  return (
    <View style={tw`flex-grow py-4 gap-2`}>
      <Text style={tw`text-center text-lg font-semibold`}>
        Good Morning, Aryan
      </Text>
      <View style={tw`flex-row items-center gap-2 p-2`}>
        <TextInput
          style={tw`p-1 px-4 flex-1 border-2 border-black border-opacity-20 text-base rounded-md`}
          placeholder="Where to?"
          value={destination}
          onChangeText={(e) => setDestinationState(e)}
        />
        <Button
          title="Search"
          onPress={handleDestination}
          buttonStyle={tw`bg-black`}
        />
      </View>
      <NavFavourites handleLocation={handleFavSelect} />
    </View>
  );
}
