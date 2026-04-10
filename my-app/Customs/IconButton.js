import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const IconButton = ({ type, label, onPress }) => {
  const isGoogle = type === "google";

  return (
    <TouchableOpacity
      style={[styles.button, isGoogle ? styles.google : styles.facebook]}
      onPress={onPress}
    >
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{isGoogle ? "G" : "f"}</Text>
      </View>
      <Text style={[styles.text, !isGoogle && { color: "#FFF" }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 6,
  },
  google: {
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#FFF",
  },
  facebook: {
    backgroundColor: "#3b5998",
  },
  iconBox: {
    width: 20,
    alignItems: "center",
  },
  icon: {
    fontWeight: "bold",
  },
  text: {
    fontWeight: "600",
  },
});
