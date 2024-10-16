import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GIcons } from "../../../constants/icons/globalIcons";
import { wp } from "../../../helpers/common";

export default function HStops({ data = [] }) {
  console.log(data);

  const lastDes = data[data?.length - 1];
  return (
    <View className="mt-[28px] w-full">
      <Text className="text-center font-Lato-Bold leading-normal text-[18px] text-pb">
        Stops
      </Text>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        className="w-full"
      >
        <View className="" style={{ width: wp(89.8) }}>
          <View className="min-w-[100%] max-w-[100%]">
            <View className="max-w-[100%] mt-[24px]">
              <View className="flex-row justify-between max-w-[100%] items-center gap-x-[4.48px] w-full">
                <Image
                  source={GIcons.Checkbox}
                  resizeMode="contain"
                  className="w-[22px] h-[22px]"
                />
                <View className="flex-grow w-[29%] h-[1px] bg-primary"></View>
                <Image
                  source={GIcons.CheckboxStart}
                  resizeMode="contain"
                  className="w-[22px] h-[22px]"
                />
                <View className="flex-grow w-[29%] h-[1px] bg-gray400"></View>
                <Image
                  source={GIcons.UnCheckbox}
                  resizeMode="contain"
                  className="w-[22px] h-[22px]"
                />
              </View>
            </View>

            {/* Stop 1 */}

            <View className="flex-row justify-between mt-[9px]">
              <View>
                <Text className="text-[#506CF3] text-[12px] leading-normal font-Lato-Regular">
                  Stop 1
                </Text>
                <Text className="text-[#6B7280] text-[10px] leading-normal font-Lato-Regular mt-[9px]">
                  21 Feb at 11.34 AM
                </Text>
                <Text className="text-[#506CF3] text-[10px] leading-normal font-Lato-Regular mt-[4px]">
                  Dallas, TX
                </Text>
              </View>
              <View>
                <Text className="text-[#64748B] text-[12px] leading-normal font-Lato-Regular  text-center">
                  Stop 2
                </Text>
                <Text className="text-[#6B7280] text-[10px] leading-normal font-Lato-Regular  text-center mt-[9px]">
                  21 Feb at 11.34 AM
                </Text>
                <Text className="text-[#506CF3] text-[10px] leading-normal font-Lato-Regular  text-center mt-[4px]">
                  Dallas, TX
                </Text>
              </View>
              {lastDes && (
                <View>
                  <Text className="text-[#506CF3] text-[12px] leading-normal font-Lato-Regular text-right">
                    Delivered
                  </Text>
                  <Text className="text-[#6B7280] text-[10px] leading-normal font-Lato-Regular text-right mt-[9px]">
                    21 Feb at 11.34 AM
                  </Text>
                  <Text className="text-[#506CF3] text-[10px] leading-normal font-Lato-Regular text-right mt-[4px]">
                    Dallas, TX
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
