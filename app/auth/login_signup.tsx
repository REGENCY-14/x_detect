import { Image, Pressable, Text, View } from "react-native";
import Logo from "../../assets/images/logo.png";

export default function Index() {
  return (
    <View className="flex-1 mt-40 items-center px-8">
      <Image source={Logo} className="w-48 h-48" />
      <Text className="text-[48px] text-[#296692] text-center mt-6 font-semibold ">
        Welcome to X-detect
      </Text>
      <Text className="text-[#296692] text-[16px] font-semibold">
        Scan. Detect. Breathe Better
      </Text>
      <Pressable
        className="bg-white px-4 py-2 w-[361px] h-[44px] mt-32 rounded-[20px] shadow-md"
        onPress={() => alert("Button pressed!")}
      >
        <Text className="text-[#296692] text-lg font-semibold text-center">
          Log in
        </Text>
      </Pressable>
      <Pressable
        className="bg-[#88C369] px-4 py-2 w-[361px] h-[44px] mt-8 rounded-[20px] shadow-md"
        onPress={() => alert("Button pressed!")}
      >
        <Text className="text-white text-lg font-semibold text-center">
          Register
        </Text>
      </Pressable>
      <Text className="text-[#0802A3] mt-5 text-[15px]">
        Explore as a guest
      </Text>
    </View>
  );
}
