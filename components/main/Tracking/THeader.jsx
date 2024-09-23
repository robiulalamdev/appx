import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { GAssets } from "../../../constants/assets/globalAssets";
import { GIcons } from "../../../constants/icons/globalIcons";
import { useRouter } from "expo-router";

const THeader = () => {
  const router = useRouter();
  return (
    <View className="flex-row justify-between items-center">
      <Image
        source={GAssets.logo}
        resizeMode="contain"
        className="w-[124px] h-[32px]"
      />

      <View className="flex-row items-center gap-x-[12px]">
        <TouchableOpacity onPress={() => router.push("(main)/notification")}>
          <Image
            source={GIcons.notification}
            resizeMode="contain"
            className="w-[32px] h-[32px]"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("(main)/profile")}>
          <Image
            source={GIcons.profile}
            resizeMode="cover"
            className="w-[32px] h-[32px]"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default THeader;
