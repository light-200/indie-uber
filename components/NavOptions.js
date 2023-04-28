import { Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get A Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "345",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

export default function NavOptions({ handleSetOrigin }) {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 bg-gray-200 rounded-lg mr-2 shadow-sm h-54`}
          onPress={() => {
            navigation.navigate(item.screen);
            handleSetOrigin();
          }}
        >
          <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
          <Image
            style={{
              width: 150,
              height: 100,
              resizeMode: "contain",
            }}
            source={{ uri: item.image }}
          />
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </TouchableOpacity>
      )}
    />
  );
}
