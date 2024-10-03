import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GIcons } from "../../../constants/icons/globalIcons";
import { useRouter } from "expo-router";

export default function BackTitleHeader({ title = "", icon }) {
  const router = useRouter();
  return (
    <View className="flex-row justify-between items-center">
      {icon ? (
        icon
      ) : (
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={GIcons.backArrow}
            resizeMode="contain"
            className="w-[22px] h-[22px]"
          />
        </TouchableOpacity>
      )}
      <Text className="text-[#292941] text-[18px] font-Lato-Bold leading-normal">
        {title}
      </Text>
      <View className="w-[22px]"></View>
    </View>
  );
}

const styles = StyleSheet.create({});
