// app/signup.tsx
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Signup() {
  return (
    <View className="px-6 mt-20">
      <Text className="text-center text-[#296692] text-3xl mb-6">Sign Up</Text>

      <View className="flex-row justify-center gap-8 mb-4">
        <TouchableOpacity className="bg-white w-[60px] h-[57px] p-3 rounded-md">
          <Image source={require("../../assets/images/google.png")} className="w-[34px] h-[34px] place-self" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white  w-[60px] h-[57px] p-3 rounded-md ">
          <Image source={require("../../assets/images/facebook.png")} className="w-[34px] h-[34px]" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-white  w-[60px] h-[57px] p-3 rounded-md ">
          <Image source={require("../../assets/images/apple.png")} className="w-[34px] h-[34px]" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center mb-4">
        <View className="flex-1 h-px bg-[#296692]" />
        <Text className="px-2 text-[#296692] text-xl">OR</Text>
        <View className="flex-1 h-px bg-[#296692]" />
      </View>

      <Text className="text-l text-[#296692] mb-2">Step 1 of 2</Text>

      <View className="gap-6 mb-4">
        <View className="flex-row items-center bg-white rounded-full px-4 py-3 border-[0.5px]">
          <FontAwesome name="user" size={20} color="gray" className="mr-2" />
          <TextInput placeholder="Enter your name" className="flex-1 ml-2 text-gray-700" />
        </View>
        <View className="flex-row items-center bg-white rounded-full px-4 py-3 shadow">
          <MaterialIcons name="email" size={20} color="gray" />
          <TextInput placeholder="Enter your email" className="flex-1 ml-2 text-gray-700" />
        </View>
        <View className="flex-row items-center bg-white rounded-full px-4 py-3 shadow">
          <Feather name="phone" size={20} color="gray" />
          <TextInput placeholder="Phone Number" className="flex-1 ml-2 text-gray-700" keyboardType="phone-pad" />
        </View>
        <View className="flex-row items-center bg-white rounded-full px-4 py-3 shadow">
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
          <TextInput placeholder="Enter your password" secureTextEntry className="flex-1 ml-2 text-gray-700" />
          <Feather name="eye-off" size={20} color="gray" />
        </View>
      </View>

      <View className="flex-row items-start mb-4">
        <TouchableOpacity className="w-5 h-5 border rounded mr-2 mt-1 bg-white" />
        <Text className="text-xs text-gray-600">
          I agree to the healthcare
          <Text className="text-blue-600"> Terms of Service </Text>
          and
          <Text className="text-blue-600"> Privacy Policy</Text>
        </Text>
      </View>

      <TouchableOpacity className="bg-[#88c369] py-3 rounded-full mb-4">
        <Text className="text-white text-center font-bold text-lg">Next</Text>
      </TouchableOpacity>

      <Link href="/guest" className="text-blue-700 text-center underline">
        Explore as a guest
      </Link>
    </View>
  );
}
