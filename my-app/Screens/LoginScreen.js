import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      scrollEnabled={false}
    >
      {/* Logo/Icon */}
      <View style={styles.iconContainer}>
        <Image source={require("../assets/logo/carot.png")} />
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Loging</Text>
      <Text style={styles.subtitle}>Enter your emails and password</Text>

      {/* Form Container */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={styles.inputLine} />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Text style={styles.eyeText}>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputLine} />
        </View>

        {/* Forgot Password Link */}
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Log In Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("App")}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupLink}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 60,
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#999",
    marginBottom: 40,
  },
  formContainer: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  eyeIcon: {
    paddingLeft: 10,
  },
  eyeText: {
    fontSize: 18,
  },
  inputLine: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginTop: 10,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginTop: 15,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#53B175",
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#999",
  },
  signupLink: {
    fontSize: 14,
    fontWeight: "500",
    color: "#53B175",
  },
});
