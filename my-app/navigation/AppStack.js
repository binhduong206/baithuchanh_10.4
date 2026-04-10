import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import LoadScreen from "../Screens/LoadScreen";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Load" component={LoadScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
