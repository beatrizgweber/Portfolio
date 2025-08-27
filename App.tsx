import React from "react";
import { Routes } from "./src/routes";
import { useFonts } from "expo-font";
import { ActivityIndicator, Text } from "react-native";
import {
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

export default function App() {
  const [fontsLoaded] = useFonts({
    RalewayRegular: Raleway_400Regular,
    RalewayBold: Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = { fontFamily: "RalewayRegular" };
  return <Routes />;
}
