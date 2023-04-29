import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <Image
        source={require("../assets/uber_logo.png")}
        style={[
          tw`h-40 w-70`,
          {
            resizeMode: "contain",
          },
        ]}
      />
      <View
        style={[
          tw`w-full h-90`,
          {
            resizeMode: "contain",
          },
        ]}
      >
        <Image
          source={require("../assets/taxi.png")}
          style={[
            tw`h-full w-auto`,
            {
              resizeMode: "contain",
            },
          ]}
        />
      </View>
      <View
        style={tw`p-4 px-6 w-full h-50 justify-between bg-gray-100 absolute bottom-0 bg-white shadow-lg rounded-t-2xl`}
      >
        <Text style={tw`text-lg font-semibold mb-8`}>Join the app today</Text>
        <View>
          <Button
            title="Login"
            onPress={handleLogin}
            buttonStyle={tw`bg-black mb-2`}
          />
          <View style={tw`flex-row items-center gap-1 mb-5`}>
            <Text style={tw`text-lg`}>don't have an account yet?</Text>
            <TouchableOpacity onPress={handleSignup}>
              <Text style={tw`text-lg text-blue-800`}>sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
