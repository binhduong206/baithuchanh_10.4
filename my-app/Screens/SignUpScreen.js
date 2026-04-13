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

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
    // Simple email validation
    setIsEmailValid(value.includes("@") && value.includes("."));
  };

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
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      {/* Form Container */}
      <View style={styles.formContainer}>
        {/* Username Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          <View style={styles.inputLine} />
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.emailInputContainer}>
            <TextInput
              style={styles.emailInput}
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            {isEmailValid && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <View style={styles.inputLine} />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
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

        {/* Terms and Privacy */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>By continuing you agree to our </Text>
          <TouchableOpacity>
            <Text style={styles.termsLink}>Terms of Service </Text>
          </TouchableOpacity>
          <Text style={styles.termsText}>and </Text>
          <TouchableOpacity>
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </TouchableOpacity>
          <Text style={styles.termsText}>.</Text>
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("App")}
      >
        <Text style={styles.signupText}>Sing Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>SignIn</Text>
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
  emailInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  emailInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  checkmark: {
    fontSize: 18,
    color: "#53B175",
    marginLeft: 10,
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
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  termsText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#999",
    lineHeight: 20,
  },
  termsLink: {
    fontSize: 13,
    fontWeight: "500",
    color: "#53B175",
  },
  signupButton: {
    backgroundColor: "#53B175",
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signupText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#999",
  },
  loginLink: {
    fontSize: 14,
    fontWeight: "500",
    color: "#53B175",
    textDecorationLine: "none",
  },
});
