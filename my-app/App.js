import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigation/AppStack";
import AppNavigator from "./navigation/AppNavigator";
import { CartProvider } from "./data/cart";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
