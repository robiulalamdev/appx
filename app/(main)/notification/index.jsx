import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { GlobalStyleSheet } from "../../../constants/StyleSheet";
import { StatusBar } from "expo-status-bar";
import NHeader from "../../../components/main/notification/NHeader";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../../config";
import { useFocusEffect } from "expo-router";
import moment from "moment";

const items = [
  {
    id: 1,
    title: "New Job Assignment Notification",
    type: "Assignment",
    createdAt: "2 min ago",
  },
  {
    id: 2,
    title: "Upcoming Job Reminder",
    type: "Upcoming",
    createdAt: "2 min ago",
  },
  {
    id: 3,
    title: "Job Acceptance Confirmation",
    type: "Acceptance",
    createdAt: "2 min ago",
  },
  {
    id: 4,
    title: "Pending Job Reminder",
    type: "Pending",
    createdAt: "2 min ago",
  },
];

export default function NotificationScreen() {
  const { user } = useSelector((state) => state.persisted.user);
  const [data, setData] = useState([]);

  const refetch = () => {
    fetch(`${BASE_URL}/api/v1/tracking/deriver/${user?.phoneNumber}`)
      .then((res) => res.json())
      .then((data) => {
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
    <View className="bg-[#E2E8F0] flex-1">
      <StatusBar />
      <SafeAreaView
        className="flex-1 max-w-[575px] w-full mx-auto"
        style={[
          GlobalStyleSheet.container,
          GlobalStyleSheet.containerPT,
          GlobalStyleSheet.containerPB,
        ]}
      >
        <NHeader />

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-[24.92px]"
        >
          {data.map((item, index) => (
            <View
              key={index}
              className="bg-white w-full rounded-[4px] p-[16px] mb-[16px]"
            >
              <View className="flex-row gap-x-[10px]">
                <View
                  className={`w-[10px] h-[10px] rounded-full mt-[4px] ${
                    (item?.type === "Assignment" && "bg-[#51CD5D]") ||
                    (item?.type === "Upcoming" && "bg-[#FFCA12]") ||
                    (item?.type === "Acceptance" && "bg-[#5466FF]") ||
                    (item?.type === "Pending" && "bg-[#51CD5D]") ||
                    "bg-[#51CD5D]"
                  }`}
                ></View>
                <View>
                  <Text className="text-[16px] font-Lato-Medium text-[#1A1A1A] leading-[22.4px]">
                    {item.title || "New Job Assignment Notification"}
                  </Text>
                  <View className="flex-row items-center gap-[4px] mt-[6px]">
                    <Text className="text-[12px] font-Lato-Medium text-[#6B7280] leading-[16.8px]">
                      Notification
                    </Text>
                    <View className="w-[2px] h-[2px] rounded-full bg-[#6B7280]"></View>
                    <Text className="text-[12px] font-Lato-Medium text-[#6B7280] leading-[16.8px]">
                      {moment(item?.createdAt).fromNow()}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
          {/* {items.map((item, index) => (
            <View
              key={index}
              className="bg-white w-full rounded-[4px] p-[16px] mb-[16px]"
            >
              <View className="flex-row gap-x-[10px]">
                <View
                  className={`w-[10px] h-[10px] rounded-full mt-[4px] ${
                    (item?.type === "Assignment" && "bg-[#51CD5D]") ||
                    (item?.type === "Upcoming" && "bg-[#FFCA12]") ||
                    (item?.type === "Acceptance" && "bg-[#5466FF]") ||
                    (item?.type === "Pending" && "bg-[#51CD5D]")
                  }`}
                ></View>
                <View>
                  <Text className="text-[16px] font-Lato-Medium text-[#1A1A1A] leading-[22.4px]">
                    {item.title}
                  </Text>
                  <View className="flex-row items-center gap-[4px] mt-[6px]">
                    <Text className="text-[12px] font-Lato-Medium text-[#6B7280] leading-[16.8px]">
                      Notification
                    </Text>
                    <View className="w-[2px] h-[2px] rounded-full bg-[#6B7280]"></View>
                    <Text className="text-[12px] font-Lato-Medium text-[#6B7280] leading-[16.8px]">
                      {item.createdAt}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))} */}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
