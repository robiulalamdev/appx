import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <Stack initialRouteName="login" screenOptions={{ header: () => {} }}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
