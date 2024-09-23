import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { GlobalStyleSheet } from "../../constants/StyleSheet";
import { GIcons } from "../../constants/icons/globalIcons";
import HStops from "../../components/main/Home/HStops";
import HBanner from "../../components/main/Home/HBanner";
import HInformation from "../../components/main/Home/HInformation";
import { useRouter } from "expo-router";

export default function MainScreen() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  return (
    <SafeAreaView
      className="flex-1 bg-background"
      style={[
        GlobalStyleSheet.container,
        GlobalStyleSheet.containerPT,
        GlobalStyleSheet.containerPB,
      ]}
    >
      <Image
        source={GIcons.CaretLeft}
        resizeMode="contain"
        className="w-[24px] h-[24px]"
      />
      {step === 1 && <HBanner name="Tracking Now" buttonTitle="Active" />}
      {step === 2 && <HBanner name="Tracking Paused" buttonTitle="Passive" />}

      <HStops />
      <View className="flex-col justify-between flex-grow">
        <HInformation />

        <View>
          {step === 2 && (
            <Text className="mb-[16px] text-[12px] text-center font-Archivo-Regular text-[#6B7280] leading-[18px]">
              A Location update has been requested please click the send my
              location button bellow
            </Text>
          )}
          {step === 1 && (
            <TouchableOpacity
              onPress={() => setStep(2)}
              className="w-full h-[47px] bg-primary justify-center items-center rounded-[4px]"
            >
              <Text className="text-white font-Lato-SemiBold leading-normal text-[16px]">
                Resume
              </Text>
            </TouchableOpacity>
          )}
          {step === 2 && (
            <TouchableOpacity
              onPress={() => router.push("(main)/tracking")}
              className="w-full h-[47px] bg-primary justify-center items-center rounded-[4px]"
            >
              <Text className="text-white font-Lato-SemiBold leading-normal text-[16px]">
                Send My Location
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
