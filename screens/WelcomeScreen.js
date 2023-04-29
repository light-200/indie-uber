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
        style={tw`gap-1 justify-center p-2 px-8 w-full max-h-40 bg-gray-100 absolute bottom-0`}
      >
        <Button
          title="Login"
          onPress={handleLogin}
          buttonStyle={tw`bg-black`}
        />
        <View style={tw`flex-row items-center gap-1 justify-between`}>
          <Text style={tw`text-lg mb-5`}>don't have an account yet?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={tw`text-lg mb-5 text-blue-800`}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
