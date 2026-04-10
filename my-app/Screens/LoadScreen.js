import { View, StyleSheet, Text, Image } from "react-native";
import { useEffect } from "react";

export default function LoadScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Image source={require("../assets/logo/logo.png")} />
        <Text style={styles.text}>online groceriet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrap: {
    alignItems: "flex-end",
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 5.5,
    color: "#FFFFFF",
  },
});
