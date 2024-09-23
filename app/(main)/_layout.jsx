import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <>
      <Stack initialRouteName="index" screenOptions={{ header: () => {} }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="tracking" options={{ headerShown: false }} />
        <Stack.Screen name="notification" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
