import { Stack, Tabs } from "expo-router";
import "../globals.css";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View className="bg-[#E4EBF7]">
    <Stack>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Stack>
    </View>
  );
}
