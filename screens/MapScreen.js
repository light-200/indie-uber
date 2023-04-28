import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";
import tw from "twrnc";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Map from "../components/Map";

export default function MapScreen() {
  const Stack = createStackNavigator();

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
