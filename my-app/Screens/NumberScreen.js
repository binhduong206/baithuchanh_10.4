import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function NumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Enter your mobile number</Text>

        <View style={styles.inputWrap}>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputRow}>
            {/* Flag */}
            <Image
              source={require("../assets/logo/flag.png")}
              style={styles.flag}
            />

            {/* Country code */}
            <Text style={styles.code}>+880</Text>

            {/* Input */}
            <TextInput
              placeholder="Enter phone number"
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
          </View>
          {/* Line bên dưới */}
          <View style={styles.line} />
        </View>
      </View>

      {isInputFocused && (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("Verification")}
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
    marginTop: 10,
    marginBottom: 20,
  },
  backText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
  },
  topContainer: {
    width: "100%",
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    marginBottom: 40,
  },
  inputWrap: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    color: "#828282",
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    width: 40,
    height: 25,
    borderRadius: 4,
  },
  code: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
    marginRight: 8,
    color: "#000",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  line: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginTop: 15,
  },
  keypadContainer: {
    width: "100%",
    marginBottom: 40,
    gap: 15,
  },
  keypadRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  keyButton: {
    flex: 1,
    height: 70,
    backgroundColor: "#FFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  keyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  keyLabel: {
    fontSize: 11,
    fontWeight: "400",
    color: "#999",
    marginTop: 2,
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
