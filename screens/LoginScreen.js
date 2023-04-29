import React, { useState } from "react";
import { TextInput, Alert, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";
import tw from "twrnc";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Image } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Invalid input", "Please enter your email and password.");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        Alert.alert(err.code.split("/")[0], err.code.split("/")[1]);
      }
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 relative`}>
      <Image
        source={require("../assets/taxi.png")}
        style={[
          tw`h-1/2 min-h-80 mb-8 w-full`,
          {
            resizeMode: "contain",
          },
        ]}
      />
      <View
        style={[
          tw`w-full p-4 px-6 absolute bottom-0 bg-white shadow-2xl`,
          {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
        ]}
      >
        <View style={tw`w-full mb-4`}>
          <Text style={tw`text-lg font-medium mb-2`}>Email Address</Text>
          <TextInput
            style={tw`border border-gray-400 px-3 py-2 rounded-lg`}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={tw`w-full mb-4`}>
          <Text style={tw`text-lg font-medium mb-2`}>Password</Text>
          <TextInput
            style={tw`border border-gray-400 px-3 py-2 rounded-lg`}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <Button
          title="Login"
          onPress={handleLogin}
          buttonStyle={tw`bg-black`}
        />
      </View>
    </SafeAreaView>
  );
}
