import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../src/screens/HomeScreen";
import SkillsScreen from "../../src/screens/SkillsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#E07A5F",
        tabBarInactiveTintColor: "#7A6F6F",
        tabBarStyle: { backgroundColor: "#F4F1DE" },
      }}
    >
      <Screen
        name="Contact Me"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contacts" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Skills"
        component={SkillsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="target" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
