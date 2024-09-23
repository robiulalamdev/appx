import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { GlobalStyleSheet } from "../../../constants/StyleSheet";
import { StatusBar } from "expo-status-bar";
import BackTitleHeader from "../../../components/common/Headers/BackTitleHeader";
import { Image } from "react-native";
import { GAssets } from "../../../constants/assets/globalAssets";
import { GIcons } from "../../../constants/icons/globalIcons";
import { pickImageFromGallery } from "../../../services/globalServices";

export default function ProfileScreen() {
  const [imageUri, setImageUri] = useState(null);

  const handleInputImage = async () => {
    const result = await pickImageFromGallery();
    if (result?.success) {
      setImageUri(result?.uri);
    } else {
      Alert.alert("Error", result.message);
    }
  };
  return (
    <View className="bg-[#F1F5F9] flex-1">
      <StatusBar />
      <SafeAreaView
        className="flex-1"
        style={[
          GlobalStyleSheet.container,
          GlobalStyleSheet.containerPT,
          GlobalStyleSheet.containerPB,
        ]}
      >
        <BackTitleHeader title="Profile" />
        <View className="bg-[#FFFFFF] rounded-[8px] w-full px-[16px] pb-[16px] mt-[24.92px]">
          <View className="w-[102px] h-[102px] rounded-full mx-auto relative mt-[48px]">
            <Image
              source={imageUri ? { uri: imageUri } : GAssets.profile}
              resizeMode="cover"
              className="w-[102px] h-[102px] rounded-full"
            />
            <TouchableOpacity
              onPress={() => handleInputImage()}
              className="w-[24px] h-[24px] bg-white rounded-full justify-center items-center border border-gray-50 absolute bottom-[6px] right-[2px]"
            >
              <Image
                source={GIcons.uploadArrow}
                resizeMode="contain"
                className="w-[14px] h-[14px]"
              />
            </TouchableOpacity>
          </View>
          <View className="mt-[28px]">
            <Text className="text-[16px] font-Lato-Medium leading-[20px] text-[#1A1A1A] mb-[12px]">
              Name
            </Text>
            <TextInput
              inputMode="text"
              placeholder="John Smith"
              placeholderTextColor="#1A1A1A"
              className="w-full h-[44px] bg-white border-[1px] border-[#EDEDED] rounded-[12px] px-[15px] text-[14px] font-Lato-Regular leading-[20px] text-[#1A1A1A]"
            />
          </View>
          <View className="mt-[16px]">
            <Text className="text-[16px] font-Lato-Medium leading-[20px] text-[#1A1A1A] mb-[12px]">
              Phone Number
            </Text>
            <TextInput
              inputMode="tel"
              placeholder="+11 2103 456 789"
              placeholderTextColor="#1A1A1A"
              className="w-full h-[44px] bg-white border-[1px] border-[#EDEDED] rounded-[12px] px-[15px] text-[14px] font-Lato-Regular leading-[20px] text-[#1A1A1A]"
            />
          </View>
        </View>

        <View className="flex-col justify-between flex-grow">
          <View className="bg-[#FFFFFF] rounded-[8px] w-full pb-[16px] mt-[16px]">
            <View className="px-[16px] py-[16px]">
              <Text className="text-[16px] text-[#000000] leading-[20px] font-Inter-SemiBold">
                Refer a friend
              </Text>
              <Text className="text-[12px] text-[#000000AB] leading-[20px] font-Inter-Regular mt-[8px]">
                Enter your friends phone number to refer them
              </Text>
            </View>
            <View className="px-[16px] border-t-[1px] border-[#E2E8F0]">
              <View className="pt-[16px]">
                <Text className="text-[16px] font-Lato-Medium leading-[20px] text-[#1A1A1A] mb-[12px]">
                  Enter Phone Number
                </Text>
                <TextInput
                  inputMode="tel"
                  placeholder="Enter Phone Number"
                  placeholderTextColor="#94A3B8"
                  className="w-full h-[44px] bg-white border-[1px] border-[#EDEDED] rounded-[12px] px-[15px] text-[14px] font-Lato-Regular leading-[20px] text-[#1A1A1A]"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity className="w-full h-[47px] bg-primary justify-center items-center rounded-[4px]">
            <Text className="text-white font-Lato-SemiBold leading-normal text-[16px]">
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
