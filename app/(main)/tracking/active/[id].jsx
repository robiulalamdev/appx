import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyleSheet } from "../../../../constants/StyleSheet";
import { GIcons } from "../../../../constants/icons/globalIcons";
import HStops from "../../../../components/main/Home/HStops";
import HBanner from "../../../../components/main/Home/HBanner";
import HInformation from "../../../../components/main/Home/HInformation";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BASE_URL } from "../../../../config";

export default function ActiveTracking() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [data, setData] = useState();

  const refetch = () => {
    fetch(`${BASE_URL}/api/v1/tracking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setData(data?.data);
        }
      });
  };

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);
  return (
    <SafeAreaView
      className="flex-1 bg-background"
      style={[
        GlobalStyleSheet.container,
        GlobalStyleSheet.containerPT,
        GlobalStyleSheet.containerPB,
      ]}
    >
      <View className="flex-1 h-full max-w-[575px] w-full mx-auto">
        <Image
          source={GIcons.CaretLeft}
          resizeMode="contain"
          className="w-[24px] h-[24px]"
        />
        <HBanner name="Tracking Now" buttonTitle="Active" />

        <HStops />
        <View className="flex-col justify-between flex-grow">
          <HInformation item={data} />

          <View>
            <TouchableOpacity
              //   onPress={() => setStep(2)}
              className="w-full h-[47px] bg-primary justify-center items-center rounded-[4px]"
            >
              <Text className="text-white font-Lato-SemiBold leading-normal text-[16px]">
                Resume
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
