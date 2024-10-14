import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
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
import PhoneVerification from "./PhoneVerification";
import { useCreateUserMutation } from "../../../redux/features/user/userApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/user/userSlice";

export default function RegisterUi() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm();
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const [createUser, { isLoading }] = useCreateUserMutation();

  const dispatch = useDispatch();

  const handleRegister = async (data) => {
    if (watch("confirm_password") !== watch("password")) {
      setError("confirm_password", {
        type: "manual",
        message: "Password not matched",
      });
      return;
    }

    const options = {
      data: {
        name: data?.name,
        phoneNumber: data?.phone_number,
        password: data?.password,
        role: "Driver",
      },
    };
    const result = await createUser(options);
    if (result?.data?.data?.accessToken) {
      await dispatch(setUser(result?.data?.data?.user));
      setShowOtp(true);
    }
    if (result?.error?.data?.message) {
      Alert.alert("Error", result?.error?.data?.message);
    }
    // console.log(result?.error?.data?.message);
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
      <ScrollView
        className="flex-1 max-w-[575px] w-full mx-auto"
        showsVerticalScrollIndicator={false}
      >
        {showOtp ? (
          <PhoneVerification setShowOtp={setShowOtp} />
        ) : (
          <View className="flex-col justify-between flex-grow">
            <View className="">
              <Image
                source={GAssets.logo}
                resizeMode="contain"
                className="max-w-[247px] max-h-[66px] mx-auto"
              />

              <Text className="text-[#1A1A1A] text-[20px] font-Lato-SemiBold leading-normal mt-[56px]">
                Create Account
              </Text>

              <View className="mt-[34px]">
                <View>
                  <Text className="text-[#1A1A1A] font-Lato-Medium text-[16px] leading-normal mb-[16px]">
                    Enter Your Name
                  </Text>
                  <CMNInput
                    {...register("name", { required: "Name is required" })}
                    inputMode="text"
                    onChangeText={(text) => setValue("name", text)}
                    placeholder="John Smith"
                    placeholderTextColor="#1A1A1A"
                  />
                  {errors.name && (
                    <Text className="text-red-600 text-[12px] font-Lato-Medium leading-normal">
                      {errors.name.message}
                    </Text>
                  )}
                </View>
                <View className="mt-[16px]">
                  <Text className="text-[#1A1A1A] font-Lato-Medium text-[16px] leading-normal mb-[16px]">
                    Enter Phone Number
                  </Text>
                  <CMNInput
                    {...register("phone_number", {
                      required: "Phone Number is required",
                    })}
                    inputMode="text"
                    // inputMode="decimal"
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
                <View className="mt-[16px]">
                  <Text className="text-[#1A1A1A] font-Lato-Medium text-[16px] leading-normal mb-[16px]">
                    Re-Enter Password
                  </Text>
                  <View className="relative w-full h-fit">
                    <CMNInput
                      {...register("confirm_password", {
                        required: "Confirm Password is required",
                      })}
                      inputMode={"text"}
                      onChangeText={(text) =>
                        setValue("confirm_password", text)
                      }
                      secureTextEntry={!showConfirmPassword}
                      placeholder="*************"
                      placeholderTextColor="#1A1A1A"
                    />
                    <TouchableOpacity
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="w-[16px] h-[16px] absolute top-[16.5px] right-[17px]"
                    >
                      <Image
                        source={
                          showConfirmPassword ? GIcons.eyeOpen : GIcons.eyeOff
                        }
                        resizeMode="contain"
                        className="w-[16px] h-[16px]"
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.confirm_password && (
                    <Text className="text-red-600 text-[12px] font-Lato-Medium leading-normal">
                      {errors.confirm_password.message}
                    </Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                onPress={handleSubmit(handleRegister)}
                className="bg-[#4D6DF3] h-[47px] w-full rounded-[4px] justify-center items-center mt-[23px]"
              >
                <Text className="text-[#FFFFFF] font-Lato-SemiBold text-[16px] leading-normal">
                  Create
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center items-center gap-[5px]">
              <Text className="text-[14px] font-Lato-Medium text-[#000000AB]">
                Already have account?
              </Text>
              <TouchableOpacity onPress={() => router.push("login")}>
                <Text className="text-[#506CF3] text-[12.2px] font-Lato-SemiBold">
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
