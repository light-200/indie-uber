import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, Alert } from "react-native";
import { Button, Image } from "react-native-elements";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import tw from "twrnc";

const SignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      Alert.alert("Invalid Input", "all fields are mandatory");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password, fullName);
    } catch (err) {
      Alert.alert(err.code.split("/")[0], err.code.split("/")[1]);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white relative`}>
      <Image
        source={require("../assets/taxi.png")}
        style={[
          tw`h-1/2 min-h-80 mb-8`,
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
          <Text style={tw`text-lg font-medium mb-2`}>Full Name</Text>
          <TextInput
            style={tw`border border-gray-400 px-3 py-2 rounded-lg`}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
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
          title="Sign up"
          buttonStyle={tw`bg-black`}
          onPress={handleSignup}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
