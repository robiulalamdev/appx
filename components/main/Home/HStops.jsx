import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GIcons } from "../../../constants/icons/globalIcons";
import { wp } from "../../../helpers/common";

export default function HStops({ data = [] }) {
  const length = data?.length;
  const locations = data;
  const lastItem = data?.slice(-1);

  // function getPositionedItems(array) {
  //   let result = [];

  //   // Loop through the array from the end, 3 items at a time
  //   for (let i = array.length - 1; i >= 0; i -= 3) {
  //     let thirdPos = array[i - 2]; // 3rd position from the group
  //     let secondPos = array[i - 1]; // 2nd position from the group
  //     let firstPos = array[i];      // 1st position from the group

  //     if (firstPos) result.push(`One pos: ${firstPos}`);
  //     if (secondPos) result.push(`Two pos: ${secondPos}`);
  //     if (thirdPos) result.push(`Three pos: ${thirdPos}`);
  //   }

  //   return result;
  // }

  // function getPositionType(index) {
  //   const positionInGroup = (index + 1) % 3;
  //   if (positionInGroup === 1) {
  //     return 1;
  //   } else if (positionInGroup === 2) {
  //     return 2;
  //   } else {
  //     return 3;
  //   }
  // }

  return (
    <View className="mt-[28px] w-full">
      <Text className="text-center font-Lato-Bold leading-normal text-[18px] text-pb">
        Stops
      </Text>

      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {locations?.map((item, index) => (
            <View className="" style={{ width: wp(29.8) }}>
              <View className="flex-row justify-between items-center">
                {item?.isCompleted ? (
                  <Image
                    source={GIcons.Checkbox}
                    resizeMode="contain"
                    className="w-[22px] h-[22px]"
                  />
                ) : (
                  <>
                    {index === 0 ? (
                      <Image
                        source={GIcons.CheckboxStart}
                        resizeMode="contain"
                        className="w-[22px] h-[22px]"
                      />
                    ) : (
                      <>
                        {locations[index - 1]?.isCompleted ? (
                          <Image
                            source={GIcons.CheckboxStart}
                            resizeMode="contain"
                            className="w-[22px] h-[22px]"
                          />
                        ) : (
                          <Image
                            source={GIcons.UnCheckbox}
                            resizeMode="contain"
                            className="w-[22px] h-[22px]"
                          />
                        )}
                      </>
                    )}
                  </>
                )}

                {index < length - 1 ? (
                  <View className="flex-grow h-[1px] bg-primary mx-[4px]" />
                ) : (
                  <></>
                  // <View className="flex-grow h-[1px] bg-primary mx-[4px]" />
                )}
              </View>
              <View className={``}>
                {index < length - 1 ? (
                  <Text
                    className={`${
                      item?.isCompleted ? "text-[#506CF3]" : "text-[#64748B]"
                    } text-[12px] leading-normal font-Lato-Regular`}
                  >
                    Stop {index + 1}
                  </Text>
                ) : (
                  <Text
                    className={`${
                      item?.isCompleted ? "text-[#506CF3]" : "text-[#64748B]"
                    } text-[12px] leading-normal font-Lato-Regular`}
                  >
                    Delivered
                  </Text>
                )}

                <Text className="text-[#6B7280] text-[10px] leading-normal font-Lato-Regular mt-[9px]">
                  21 Feb at 11.34 AM
                </Text>
                <Text className="text-[#506CF3] text-[10px] leading-normal font-Lato-Regular mt-[4px]">
                  {item?.location?.formatted}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
