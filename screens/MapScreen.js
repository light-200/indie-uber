import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";
import tw from "twrnc";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Map from "../components/Map";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

export default function MapScreen() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={tw`absolute top-16 left-8 z-1`}>
        <TouchableOpacity
          style={tw`bg-gray-100 p-2 rounded-full shadow-lg`}
          onPress={() => navigation.navigate("Home")}
        >
          <Icon name="menu" />
        </TouchableOpacity>
      </View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            component={NavigateCard}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptions}
            options={{
              headerShown: false,
              gestureEnabled: true,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
