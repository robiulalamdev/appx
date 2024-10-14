import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../styles/global";
import { persistor, store } from "../redux/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainRoute from "../routes/mainRoute";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Lato-Regular": require("../assets/fonts/lato/Lato-Regular.ttf"),
    "Lato-Bold": require("../assets/fonts/lato/Lato-Bold.ttf"),
    "Lato-SemiBold": require("../assets/fonts/lato/Lato-SemiBold.ttf"),
    "Lato-Medium": require("../assets/fonts/lato/Lato-Medium.ttf"),
    "Archivo-Regular": require("../assets/fonts/archivo/Archivo-Regular.ttf"),

    // inter
    "Inter-Regular": require("../assets/fonts/inter/Inter-Regular.otf"),
    "Inter-Medium": require("../assets/fonts/inter/Inter-Medium.otf"),
    "Inter-SemiBold": require("../assets/fonts/inter/Inter-SemiBold.otf"),
    "Inter-Bold": require("../assets/fonts/inter/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainRoute />
        </PersistGate>
      </Provider>
    </>
  );
}
