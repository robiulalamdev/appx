import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import BackTitleHeader from "../../common/Headers/BackTitleHeader";
import { GIcons } from "../../../constants/icons/globalIcons";
import { useRouter } from "expo-router";

export default function PhoneVerification({ setShowOtp }) {
  const [codes, setCodes] = useState(Array(6).fill(""));
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [errorMessages, setErrorMessages] = useState();
  const router = useRouter();

  const onChangeCode = (text, index) => {
    if (text.length > 1) {
      setErrorMessages(undefined);
      const newCodes = text.split("");
      setCodes(newCodes);
      refs[5]?.current?.focus();
      return;
    }
    setErrorMessages(undefined);
    const newCodes = [...codes];
    newCodes[index] = text;
    setCodes(newCodes);
    if (text !== "" && index < 5) {
      refs[index + 1]?.current?.focus();
    }
  };

  return (
    <View>
      <BackTitleHeader
        title="Phone Verification"
        icon={
          <TouchableOpacity onPress={() => setShowOtp(false)}>
            <Image
              source={GIcons.CaretLeft}
              resizeMode="contain"
              className="w-[22px] h-[22px]"
            />
          </TouchableOpacity>
        }
      />

      <Image
        source={require("../../../assets/images/auth/img1.png")}
        resizeMode="contain"
        className="max-w-[222px] max-h-[263px] mx-auto mt-[50px]"
      />

      <View className="max-w-[425px] w-full mx-auto mt-[58px]">
        <Text className="text-left sm:text-center text-[16px] font-Lato-Medium text-[#1A1A1A] leading-[24px]">
          Enter 6 digit verification code sent to your phone number
        </Text>

        <View className="flex w-full flex-row justify-start sm:justify-center gap-[7.39px] mt-[18px]">
          {codes.map((code, index) => (
            <TextInput
              key={index}
              autoComplete="one-time-code"
              enterKeyHint="next"
              className={`w-[50px] h-[50px] bg-white rounded-[8.31px] border-[0.923px] border-[#D0D9E4] text-center p-[2px] text-[#1A1A1A] ${
                errorMessages !== undefined
                  ? "border-[#ef4444] text-[#ef4444]"
                  : "text-[#1A1A1A]"
              }`}
              inputMode="numeric"
              onChangeText={(text) => onChangeCode(text, index)}
              value={code}
              maxLength={index === 0 ? codes.length : 1}
              ref={refs[index]}
              onKeyPress={({ nativeEvent: { key } }) => {
                if (key === "Backspace" && index > 0) {
                  onChangeCode("", index - 1);
                  refs[index - 1]?.current?.focus();
                }
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          onPress={() => router.push("(main)")}
          className="bg-[#4D6DF3] h-[47px] w-full rounded-[4px] justify-center items-center mt-[23px]"
        >
          <Text className="text-[#FFFFFF] font-Lato-SemiBold text-[16px] leading-normal">
            Confirm
          </Text>
        </TouchableOpacity>

        <Text className="text-[#506CF3] font-Lato-SemiBold text-[16px] leading-normal text-center mt-[16px]">
          Resend Code
        </Text>
      </View>
    </View>
  );
}
