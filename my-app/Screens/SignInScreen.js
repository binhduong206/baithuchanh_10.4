import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>{"<"}</Text>
      </TouchableOpacity>

      <View style={styles.topContainer}>
        <Image source={require("../assets/img/picture1.png")} />
        <View style={styles.inputWrap}>
          <Text style={styles.bigText}>Get your groceries with nectar</Text>
          <View style={styles.inputRow}>
            {/* Flag */}
            <Image
              source={require("../assets/logo/flag.png")}
              style={styles.flag}
            />

            {/* Country code */}
            <Text style={styles.code}>+880</Text>

            {/* Input */}
            <TextInput style={styles.input} keyboardType="phone-pad" />
          </View>
          {/* Line bên dưới */}
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.smallText}>Or connect with social media</Text>
        <TouchableOpacity
          style={styles.Gbutton}
          onPress={() => navigation.navigate("Number")}
        >
          <Image source={require("../assets/logo/gg.png")} />
          <Text style={styles.Gtext}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Fbutton}
          onPress={() => navigation.navigate("Number")}
        >
          <Image source={require("../assets/logo/f.png")} />
          <Text style={styles.Ftext}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topContainer: {
    backgroundColor: "#fcfcfc",
  },
  bigText: {
    fontWeight: "600",
    fontSize: 26,
    width: 222,
    marginBottom: 40,
  },
  inputWrap: {
    marginHorizontal: 30,
    marginBottom: 40,
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
    marginLeft: 10,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },

  line: {
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 20,
  },
  smallText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#828282",
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  Gbutton: {
    backgroundColor: "#5383EC",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    width: 350,
    height: 67,
    marginBottom: 30,
    marginTop: 40,
    flexDirection: "row",
    gap: 40,
  },
  Gtext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  Fbutton: {
    backgroundColor: "#4A66AC",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    width: 350,
    height: 67,
    flexDirection: "row",
    gap: 40,
  },
  Ftext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  backButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },
});
