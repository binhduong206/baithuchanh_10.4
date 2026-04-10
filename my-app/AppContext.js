import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const value = await AsyncStorage.getItem("isLoggedIn");

        if (value === "true") {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log("AsyncStorage error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const login = async () => {
    setIsLoggedIn(true);
    await AsyncStorage.setItem("isLoggedIn", "true");
  };

  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.removeItem("isLoggedIn");
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
