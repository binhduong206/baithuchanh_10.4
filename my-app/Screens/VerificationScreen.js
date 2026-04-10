import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useRef } from "react";

export default function VerificationScreen({ navigation }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value.replace(/[^0-9]/g, "").slice(0, 1);
    setCode(newCode);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (index, event) => {
    if (event.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Enter your 4-digit code</Text>

        <View style={styles.inputWrap}>
          <Text style={styles.label}>Code</Text>
          <View style={styles.codeInputRow}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={styles.digitInput}
                value={digit}
                onChangeText={(value) => handleCodeChange(index, value)}
                onKeyPress={(event) => handleKeyPress(index, event)}
                keyboardType="phone-pad"
                maxLength={1}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                placeholder="-"
                placeholderTextColor="#999"
              />
            ))}
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      {isInputFocused && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("SelectLocation")}
        >
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
  },
  backButton: {
    width: 50,
    height: 50,
    // backgroundColor: "#E3F2FD",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  backText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
  },
  topContainer: {
    width: "100%",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    marginBottom: 40,
  },
  inputWrap: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    color: "#828282",
    marginBottom: 15,
  },
  codeInputRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 15,
  },
  digitInput: {
    width: 50,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    paddingBottom: 5,
  },
  resendText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#53B175",
  },
  actionButton: {
    position: "absolute",
    top: "58%",
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#FFF",
  },
});
