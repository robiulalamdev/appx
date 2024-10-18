import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GlobalStyleSheet } from "../../../../constants/StyleSheet";
import { GIcons } from "../../../../constants/icons/globalIcons";
import HStops from "../../../../components/main/Home/HStops";
import HBanner from "../../../../components/main/Home/HBanner";
import HInformation from "../../../../components/main/Home/HInformation";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { BASE_URL } from "../../../../config";
import { getMyLocation } from "../../../../services/globalServices";

export default function PassiveTracking() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendLocation = async () => {
    if (data?._id) {
      setIsLoading(true);
      const location = await getMyLocation();
      if (location?.success) {
        const locationData = {
          lat: location.data?.lat,
          lon: location.data?.lon,
          country: location.data?.country,
          state: location.data?.state,
          time: Date.now(),
        };

        fetch(`${BASE_URL}/api/v1/tracking/last-location/${data?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(locationData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.success) {
              Alert.alert("Success", "Location send successfully");
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  };

  const refetch = () => {
    fetch(`${BASE_URL}/api/v1/tracking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          setData(data?.data);
        }
      });
  };

  useFocusEffect(
    useCallback(() => {
      if (id) {
        refetch();
      }
    }, [id])
  );

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
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={GIcons.CaretLeft}
            resizeMode="contain"
            className="w-[24px] h-[24px]"
          />
        </TouchableOpacity>
        <HBanner name="Tracking Paused" buttonTitle="Passive" />
        <HStops data={data?.locations} />
        <View className="flex-col justify-between flex-grow">
          <HInformation data={data} />

          <View>
            <Text className="mb-[16px] text-[12px] text-center font-Archivo-Regular text-[#6B7280] leading-[18px]">
              A Location update has been requested please click the send my
              location button bellow
            </Text>

            <TouchableOpacity
              onPress={() => handleSendLocation()}
              disabled={isLoading}
              className="w-full h-[47px] bg-primary flex-row justify-center items-center rounded-[4px]"
            >
              <Text>
                {isLoading && (
                  <ActivityIndicator
                    color="white"
                    size={16}
                    style={{ marginRight: 32 }}
                  />
                )}{" "}
              </Text>
              <Text className="text-white font-Lato-SemiBold leading-normal text-[16px] pb-[5px]">
                Send My Location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
