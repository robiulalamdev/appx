import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GIcons } from "../../../constants/icons/globalIcons";

export default function TListTracking() {
  return (
    <View className="mt-[19px]">
      <View className="flex-row justify-between items-end">
        <Text className="text-[#292941] text-[18px] font-Lato-Bold leading-normal">
          List of Tracking
        </Text>
        <TouchableOpacity>
          <Image
            source={GIcons.filter}
            resizeMode="contain"
            className="w-[18px] h-[18px]"
          />
        </TouchableOpacity>
      </View>

      <View className="bg-[#fff] w-full rounded-[8px] mt-[16px] p-[14px]">
        <View className="flex-row justify-between items-center border-b-[1px] border-[#E2E8F0] h-[41px]">
          <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
            Load ID
          </Text>
          <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
            2555-CBF
          </Text>
        </View>

        <View className="flex-row justify-between items-center gap-x-[14px] h-[41px]">
          <View className="flex-row items-center gap-x-[8px]">
            <Image
              source={GIcons.CalendarDots}
              resizeMode="contain"
              className="w-[18px] h-[18px]"
            />
            <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
              Today at 2:27 PM
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center gap-x-[14px] h-[41px]">
          <View className="flex-row items-center gap-x-[8px]">
            <Image
              source={GIcons.MapPin}
              resizeMode="contain"
              className="w-[18px] h-[18px]"
            />
            <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
              New York
            </Text>
          </View>
          <Image source={GIcons.HArrow} className="flex-[1_0_0] h-[11px]" />
          <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
            Tokyo
          </Text>
        </View>
        <TouchableOpacity
          className={`flex-grow rounded-[8px] h-[37px] justify-center items-center bg-[#4D6DF3] mt-[16px]`}
        >
          <Text
            className={`text-[14px] font-Lato-Medium leading-normal text-white`}
          >
            Accept
          </Text>
        </TouchableOpacity>
      </View>

      <View className="bg-[#fff] w-full rounded-[8px] mt-[16px] p-[14px]">
        <View className="flex-row justify-between items-center border-b-[1px] border-[#E2E8F0] h-[41px]">
          <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
            Load ID
          </Text>
          <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
            2555-CBF
          </Text>
        </View>

        <View className="flex-row justify-between items-center gap-x-[14px] h-[41px]">
          <View className="flex-row items-center gap-x-[8px]">
            <Image
              source={GIcons.CalendarDots}
              resizeMode="contain"
              className="w-[18px] h-[18px]"
            />
            <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
              Friday, 12 Sep 2024 at 3:54 PM
            </Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center gap-x-[14px] h-[41px]">
          <View className="flex-row items-center gap-x-[8px]">
            <Image
              source={GIcons.MapPin}
              resizeMode="contain"
              className="w-[18px] h-[18px]"
            />
            <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
              New York
            </Text>
          </View>
          <Image source={GIcons.HArrow} className="flex-[1_0_0] h-[11px]" />
          <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
            Tokyo
          </Text>
        </View>
        <TouchableOpacity
          className={`flex-grow rounded-[8px] h-[37px] justify-center items-center bg-[#4D6DF3] mt-[16px]`}
        >
          <Text
            className={`text-[14px] font-Lato-Medium leading-normal text-white`}
          >
            Accept
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
