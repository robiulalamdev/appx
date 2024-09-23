import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HInformation() {
  return (
    <View className="bg-[#fff] w-full rounded-[8px] mt-[28px] p-[14px]">
      <View className="flex-row justify-between items-center border-b-[1px] border-[#E2E8F0] h-[41px]">
        <View className="flex-row items-center gap-x-[8px]">
          <Image
            source={require("../../../assets/icons/main/home/user.png")}
            resizeMode="contain"
            className="w-[18px] h-[18px]"
          />
          <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
            Driver
          </Text>
        </View>
        <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
          John Smith
        </Text>
      </View>

      <View className="flex-row justify-between items-center border-b-[1px] border-[#E2E8F0] h-[41px]">
        <View className="flex-row items-center gap-x-[8px]">
          <Image
            source={require("../../../assets/icons/main/home/id.png")}
            resizeMode="contain"
            className="w-[18px] h-[18px]"
          />
          <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
            Load ID
          </Text>
        </View>
        <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
          2555-CBF
        </Text>
      </View>

      <View className="flex-row justify-between items-center border-b-[1px] border-[#E2E8F0] h-[41px]">
        <View className="flex-row items-center gap-x-[8px]">
          <Image
            source={require("../../../assets/icons/main/home/company.png")}
            resizeMode="contain"
            className="w-[18px] h-[18px]"
          />
          <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
            Company LLC
          </Text>
        </View>
        <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
          00000
        </Text>
      </View>

      <View className="flex-row justify-between items-center gap-x-[14px] border-b-[1px] border-[#E2E8F0] h-[41px]">
        <View className="flex-row items-center gap-x-[8px]">
          <Image
            source={require("../../../assets/icons/main/home/location.png")}
            resizeMode="contain"
            className="w-[18px] h-[18px]"
          />
          <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
            New York
          </Text>
        </View>
        <Image
          source={require("../../../assets/icons/main/home/ArrowR.png")}
          //   resizeMode="contain"
          className="flex-[1_0_0] h-[11px]"
        />
        <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
          Tokyo
        </Text>
      </View>

      <View className="flex-row justify-between items-center border-b-[1px] border-transparent h-[41px]">
        <View className="flex-row items-center gap-x-[8px]">
          <Image
            source={require("../../../assets/icons/main/home/time.png")}
            resizeMode="contain"
            className="w-[18px] h-[18px]"
          />
          <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
            Last Update
          </Text>
        </View>
        <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
          10 min ago
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
