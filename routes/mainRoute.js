import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, Stack, useFocusEffect, useRouter } from "expo-router";
import { useSelector } from "react-redux";

export default function MainRoute() {
  const { user } = useSelector((state) => state.persisted.user);
  const [initialRouteName, setInitialRouteName] = useState("");

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //   console.log(user);
      if (user) {
        <Redirect href="(main)" />;
        setInitialRouteName("(main)");
      } else {
        <Redirect href="(auth)" />;
        setInitialRouteName("(auth)");
      }
    }, 1000);
  }, [user]);
  return (
    <>
      {initialRouteName ? (
        <Stack
          initialRouteName={initialRouteName}
          screenOptions={{ header: () => {} }}
        >
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
