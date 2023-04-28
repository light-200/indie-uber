import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";

const destinations = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Some place,near earth",
  },
  {
    id: "345",
    icon: "briefcase",
    location: "Work",
    destination: "Some place,near heaven",
  },
];

export default function NavFavourites({ handleLocation }) {
  return (
    <FlatList
      data={destinations}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={<View style={tw`bg-gray-200 h-1`}></View>}
      renderItem={({ item: { location, destination, icon } }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              handleLocation(destination);
            }}
            style={tw`flex-row items-center p-5`}
          >
            <Icon
              style={tw`bg-gray-300 rounded-full p-3 mr-6`}
              name={icon}
              type="ionicon"
              color={"white"}
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-sm text-gray-500`}>{destination}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
