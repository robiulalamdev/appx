import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { GlobalStyleSheet } from "../../../constants/StyleSheet";
import { GAssets } from "../../../constants/assets/globalAssets";
import CMNInput from "../../common/Forms/CMNInput";
import { GIcons } from "../../../constants/icons/globalIcons";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";

export default function LoginUi() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async (data) => {
    if (watch("confirm_password") !== watch("password")) {
      setError("confirm_password", {
        type: "manual",
        message: "Password not matched",
      });
      return;
    }
    router.push("(main)");
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#F1F5F9]"
      style={[
        GlobalStyleSheet.container,
        GlobalStyleSheet.containerPT,
        GlobalStyleSheet.containerPB,
      ]}
    >
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-col justify-between flex-grow">
          <View className="">
            <Image
              source={GAssets.logo}
              resizeMode="contain"
              className="max-w-[247px] max-h-[66px] mx-auto"
            />
            <Text className="text-center mt-[12px] font-Lato-Medium text-[18px] leading-[24px]">
              Welcome Back!
            </Text>

            <Text className="text-[#1A1A1A] text-[20px] font-Lato-SemiBold leading-normal mt-[99px]">
              Login to Your Account
            </Text>

            <View className="mt-[34px]">
              <View className="mt-[16px]">
                <Text className="text-[#1A1A1A] font-Lato-Medium text-[16px] leading-normal mb-[16px]">
                  Enter Phone Number
                </Text>
                <CMNInput
                  {...register("phone_number", {
                    required: "Phone Number is required",
                  })}
                  inputMode="decimal"
                  onChangeText={(text) => setValue("phone_number", text)}
                  placeholder="+881313782626"
                  placeholderTextColor="#1A1A1A"
                />
                {errors.phone_number && (
                  <Text className="text-red-600 text-[12px] font-Lato-Medium leading-normal">
                    {errors.phone_number.message}
                  </Text>
                )}
              </View>
              <View className="mt-[16px]">
                <Text className="text-[#1A1A1A] font-Lato-Medium text-[16px] leading-normal mb-[16px]">
                  Enter Password
                </Text>
                <View className="relative w-full h-fit">
                  <CMNInput
                    {...register("password", {
                      required: "Password is required",
                    })}
                    inputMode={"text"}
                    secureTextEntry={!showPassword}
                    onChangeText={(text) => setValue("password", text)}
                    placeholder="*************"
                    placeholderTextColor="#1A1A1A"
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className="w-[16px] h-[16px] absolute top-[16.5px] right-[17px]"
                  >
                    <Image
                      source={showPassword ? GIcons.eyeOpen : GIcons.eyeOff}
                      resizeMode="contain"
                      className="w-[16px] h-[16px]"
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && (
                  <Text className="text-red-600 text-[12px] font-Lato-Medium leading-normal">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity
              onPress={handleSubmit(handleLogin)}
              className="bg-[#4D6DF3] h-[47px] w-full rounded-[4px] justify-center items-center mt-[23px]"
            >
              <Text className="text-[#FFFFFF] font-Lato-SemiBold text-[16px] leading-normal">
                Log In
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center items-center gap-[5px]">
            <Text className="text-[14px] font-Lato-Medium text-[#000000AB]">
              Don't have account?
            </Text>
            <TouchableOpacity onPress={() => router.push("register")}>
              <Text className="text-[#506CF3] text-[12.2px] font-Lato-SemiBold">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
