import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Image } from "react-native-elements";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

//random data of taxies
const data = [
  {
    id: "Uber-x-123",
    title: "Uber-X",
    multiplier: "1",
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-x-125",
    title: "Uber-X2",
    multiplier: "1",
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-x-1236",
    title: "Uber-X",
    multiplier: "1",
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-x-12567",
    title: "Uber-X2",
    multiplier: "1",
    image: "https://links.papareact.com/3pn",
  },
];

export default function RideOptions() {
  const navigation = useNavigation();
  const [seletedItem, setSelectedItem] = useState("");

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <View style={tw`px-3 absolute z-1`}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NavigationCard")}
          >
            <Icon name="chevron-left" type="fontawesome" />
          </TouchableOpacity>
        </View>
        <Text style={tw`text-center font-semibold text-lg`}>Select A Ride</Text>
      </View>
      <FlatList
        style={tw`flex-1`}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, title, multiplier }, item }) => (
          <TouchableOpacity
            style={tw`justify-between items-center flex-row px-10 ${
              seletedItem?.id === id && "bg-gray-300"
            }`}
            onPress={() => setSelectedItem(item)}
          >
            <Image
              source={{ uri: image }}
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-center font-semibold text-lg`}>{title}</Text>
              <Text>Travel time: 5hrs</Text>
            </View>
            <Text style={tw`text-xl`}>$80</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          style={tw`bg-black p-3 m-2 rounded-lg ${
            !seletedItem && "bg-gray-500"
          }`}
          disabled={seletedItem ? false : true}
        >
          <Text style={tw`text-white text-center`}>
            Choose {seletedItem?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
