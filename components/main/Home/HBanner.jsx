import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GAssets } from "../../../constants/assets/globalAssets";

export default function HBanner({ buttonTitle = "", name = "" }) {
  return (
    <View className="bg-primary35 w-full max-h-[114px] p-[14px] rounded-[8px] mt-[8px]">
      <Image
        source={GAssets.logo}
        resizeMode="contain"
        className="max-w-[187px] max-h-[48px] w-full object-contain mx-auto"
      />
      <View className="mt-[16px] flex-row justify-between items-center">
        <Text className="font-Lato-SemiBold text-pb text-[18px] leading-normal">
          {name}
        </Text>
        <Pressable className="w-[62px] h-[21px] rounded-[29px] bg-primary35 justify-center items-center">
          <Text className="text-cmn font-Lato-Medium text-[12px] text-primary">
            {buttonTitle}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
