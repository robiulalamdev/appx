import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GIcons } from "../../../constants/icons/globalIcons";
import Popover from "react-native-popover-view";

export default function TListTracking() {
  return (
    <View className="mt-[19px]">
      <View className="flex-row justify-between items-end">
        <Text className="text-[#292941] text-[18px] font-Lato-Bold leading-normal">
          List of Tracking
        </Text>
        <Popover
          backgroundStyle={{
            backgroundColor: "transparent",
          }}
          from={
            <TouchableOpacity>
              <Image
                source={GIcons.filter}
                resizeMode="contain"
                className="w-[18px] h-[18px]"
              />
            </TouchableOpacity>
          }
          arrowSize={0}
          arrowShift={0}
          verticalOffset={0}
          horizontalOffset={0}
        >
          <View className="w-[148px] h-[93px] bg-white rounded-[8px] border border-gray-200 px-[10px]">
            <View className="w-full h-[30px] flex-row items-center gap-x-[8px] border-b-[1px] border-[#CBD5E180]">
              <TouchableOpacity className="w-[11px] h-[11px] border-[1px] border-[#CBD5E1] rounded-[2px]"></TouchableOpacity>
              <Text className="text-[12px] font-Lato-Regular text-[#1A1A1A] leading-normal">
                Recent
              </Text>
            </View>
            <View className="w-full h-[30px] flex-row items-center gap-x-[8px] border-b-[1px] border-[#CBD5E180]">
              <TouchableOpacity className="w-[11px] h-[11px] border-[1px] border-[#CBD5E1] rounded-[2px]"></TouchableOpacity>
              <Text className="text-[12px] font-Lato-Regular text-[#1A1A1A] leading-normal">
                Todays
              </Text>
            </View>
            <View className="w-full h-[30px] flex-row items-center gap-x-[8px] border-b-[1px] border-transparent">
              <TouchableOpacity className="w-[11px] h-[11px] border-[1px] border-[#CBD5E1] rounded-[2px]"></TouchableOpacity>
              <Text className="text-[12px] font-Lato-Regular text-[#1A1A1A] leading-normal">
                All
              </Text>
            </View>
          </View>
        </Popover>
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
