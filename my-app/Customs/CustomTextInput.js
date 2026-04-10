import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: {
    fontSize: 13,
    color: "#555",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFF",
  },
});
