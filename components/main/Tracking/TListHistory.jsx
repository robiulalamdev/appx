import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GIcons } from "../../../constants/icons/globalIcons";
import Popover from "react-native-popover-view";

const items = [
  {
    id: 1,
    loadId: "2555-CBF",
    date: "Friday, 6 Sep 2024 at 3:54 PM",
    location: { from: "New York", to: "Tokyo" },
    status: "Completed",
  },
  {
    id: 1,
    loadId: "2555-CBF",
    date: "Friday, 6 Sep 2024 at 3:54 PM",
    location: { from: "New York", to: "Tokyo" },
    status: "Completed",
  },
  {
    id: 1,
    loadId: "2555-CBF",
    date: "Friday, 6 Sep 2024 at 3:54 PM",
    location: { from: "New York", to: "Tokyo" },
    status: "Completed",
  },
  {
    id: 1,
    loadId: "2555-CBF",
    date: "Friday, 6 Sep 2024 at 3:54 PM",
    location: { from: "New York", to: "Tokyo" },
    status: "Completed",
  },
];

export default function TListHistory() {
  return (
    <View className="mt-[19px]">
      <View className="flex-row justify-between items-end">
        <Text className="text-[#292941] text-[18px] font-Lato-Bold leading-normal">
          List of History
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-[16px] mb-[150px]"
      >
        {items.map((item, index) => (
          <View
            key={index}
            className="bg-[#fff] w-full rounded-[8px] p-[14px] mb-[16px]"
          >
            <View className="flex-row justify-between items-center border-b-[1px] border-[#E2E8F0] h-[41px]">
              <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
                Load ID: {item?.loadId}
              </Text>
              <View className="w-[86px] h-[21px] bg-primary35 rounded-[29px] justify-center items-center">
                <Text className="text-[#4C6EF6] text-[12px] font-Lato-Medium leading-normal">
                  {item.status}
                </Text>
              </View>
            </View>

            <View className="flex-row justify-between items-center gap-x-[14px] h-[41px]">
              <View className="flex-row items-center gap-x-[8px]">
                <Image
                  source={GIcons.CalendarDots}
                  resizeMode="contain"
                  className="w-[18px] h-[18px]"
                />
                <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
                  {item.date}
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
                  {item.location.from}
                </Text>
              </View>
              <Image source={GIcons.HArrow} className="flex-[1_0_0] h-[11px]" />
              <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
                {item.location.to}
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
        ))}
      </ScrollView>
    </View>
  );
}
