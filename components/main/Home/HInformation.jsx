import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";

export default function HInformation({ item = null }) {
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
          {item?.driverName}
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
          {item?.loadId}
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
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ maxWidth: "45%" }}
            className="text-[14px] font-Lato-Medium text-pb leading-normal flex-grow"
          >
            {item?.locations[0]?.location?.formatted}
          </Text>
        </View>
        <Image
          source={require("../../../assets/icons/main/home/ArrowR.png")}
          className="flex-[1_0_0] h-[11px] max-w-[10%]"
        />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ maxWidth: "45%" }}
          className="text-[#333333] text-[14px] font-Lato-Medium leading-normal flex-grow"
        >
          {item?.locations[item?.locations?.length - 1]?.location?.formatted}
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
          {moment(item?.updatedAt).fromNow()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
