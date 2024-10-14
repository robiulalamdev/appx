import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { GlobalStyleSheet } from "../../../constants/StyleSheet";
import THeader from "../../../components/main/Tracking/THeader";
import TListTracking from "../../../components/main/Tracking/TListTracking";
import TListHistory from "../../../components/main/Tracking/TListHistory";

export default function TrackingMain() {
  const [selectedTab, setSelectedTab] = useState("Request");
  return (
    <SafeAreaView
      className="flex-1 bg-[#E2E8F0]"
      style={[
        GlobalStyleSheet.container,
        GlobalStyleSheet.containerPT,
        GlobalStyleSheet.containerPB,
      ]}
    >
      <View className="flex-1 h-full max-w-[575px] w-full mx-auto">
        <THeader />
        <View className="bg-[#FFF] w-full h-[48px] flex-row justify-between items-center rounded-[4px] px-[7px] mt-[17px]">
          {["Request", "History"].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedTab(item)}
              className={`flex-grow rounded-[4px] h-[34px] justify-center items-center ${
                selectedTab === item ? "bg-[#4D6DF3]" : "bg-transparent"
              }`}
            >
              <Text
                className={`text-[14px] font-Lato-Medium leading-normal ${
                  selectedTab === item ? "text-white" : "text-[#1A1A1A]"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedTab === "Request" && <TListTracking />}
        {selectedTab === "History" && <TListHistory />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
