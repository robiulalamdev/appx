import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import { GIcons } from "../../../constants/icons/globalIcons";
import Popover from "react-native-popover-view";
import { useSelector } from "react-redux";
import { useFocusEffect } from "expo-router";
import { BASE_URL } from "../../../config";
import moment from "moment";

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
  const { user } = useSelector((state) => state.persisted.user);
  const [data, setData] = useState([]);

  const refetch = () => {
    fetch(`${BASE_URL}/api/v1/tracking/deriver/history/${user?.phoneNumber}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.data?.length > 0) {
          setData(data?.data);
        }
      });
  };

  useFocusEffect(
    useCallback(() => {
      if (user?.phoneNumber) {
        refetch();
      }
    }, [user])
  );
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
        {data?.map((item, index) => (
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
                  {item?.loadStatus}
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
                  {moment(item?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
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
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ maxWidth: "45%" }}
                  className="text-[14px] font-Lato-Medium text-pb leading-normal"
                >
                  {item?.locations[0]?.location?.formatted}
                </Text>
              </View>
              <Image source={GIcons.HArrow} className="flex-[1_0_0] h-[11px]" />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ maxWidth: "45%" }}
                className="text-[#333333] text-[14px] font-Lato-Medium leading-normal"
              >
                {
                  item?.locations[item?.locations?.length - 1]?.location
                    ?.formatted
                }
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
