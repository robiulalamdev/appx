import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function CMNInput(props = {}) {
  const { className = "", ...otherProps } = props;
  return (
    <TextInput
      {...otherProps}
      className={`w-full h-[49px] bg-[#FFFFFF] px-[17px] border-[1px] border-[#D0D9E4] rounded-[4px] text-[#1A1A1A]`}
    />
  );
}

const styles = StyleSheet.create({});
