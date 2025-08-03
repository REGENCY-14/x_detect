import { Redirect, Stack } from "expo-router";
import { Text, View,Image ,Pressable} from "react-native";

export default function Index() {
  return (
    <View className="">
   <Redirect href={"/auth/signup_first"}/>

    </View>
  );

}
