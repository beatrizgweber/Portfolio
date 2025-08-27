import { NavigationContainer } from "@react-navigation/native";
import { MyTabs } from "./bottom-tabs.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
