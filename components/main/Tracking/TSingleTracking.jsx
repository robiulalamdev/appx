import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GIcons } from "../../../constants/icons/globalIcons";
import { router } from "expo-router";
import { BASE_URL } from "../../../config";
import moment from "moment";

export default function TSingleTracking({ item = null, refetch }) {
  const [isAcceptLoading, setIsAcceptLoading] = useState(false);

  const handleAccept = (id) => {
    if (id) {
      setIsAcceptLoading(true);
      fetch(`${BASE_URL}/api/v1/tracking/update-info/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "accept",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data?.success) {
            refetch();
            Alert.alert("Success", "Tracking accepted successfully");
            setIsAcceptLoading(false);
          }
        })
        .finally(() => {
          setIsAcceptLoading(false);
        });
    }
  };

  const handleOpen = async (item) => {
    if (item?.type === "active") {
      router.push(`(main)/tracking/active/${item?._id}`);
    }
    if (item?.type === "passive") {
      router.push(`(main)/tracking/passive/${item?._id}`);
    }
  };
  return (
    <View className="bg-[#fff] w-full rounded-[8px] mt-[16px] p-[14px]">
      <View className="flex-row justify-between items-center border-b-[1px] border-[#E2E8F0] h-[41px]">
        <Text className="text-[14px] font-Lato-Medium text-pb leading-normal">
          Load ID
        </Text>
        <Text className="text-[#333333] text-[14px] font-Lato-Medium leading-normal">
          {item?.loadId}
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
            className="text-[14px] font-Lato-Medium text-pb leading-normal flex-grow"
          >
            {item?.locations[0]?.location?.formatted}
            {/* New York */}
          </Text>
        </View>
        <Image source={GIcons.HArrow} className="flex-[1_0_0] h-[11px]" />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ maxWidth: "45%" }}
          className="text-[#333333] text-[14px] font-Lato-Medium leading-normal"
        >
          {item?.locations[item?.locations?.length - 1]?.location?.formatted}
          {/* Tokyo */}
        </Text>
      </View>
      {item?.status === "accept" ? (
        <TouchableOpacity
          onPress={() => handleOpen(item)}
          className={`flex-grow rounded-[8px] h-[37px] justify-center items-center bg-[#4D6DF3] mt-[16px]`}
        >
          <Text
            className={`text-[14px] font-Lato-Medium leading-normal text-white`}
          >
            View
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={isAcceptLoading}
          onPress={() => handleAccept(item?._id)}
          className={`flex-grow rounded-[8px] h-[37px] justify-center items-center bg-[#4D6DF3] mt-[16px]`}
        >
          <Text
            className={`text-[14px] font-Lato-Medium leading-normal text-white`}
          >
            {isAcceptLoading ? "Accepting..." : "Accept"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
