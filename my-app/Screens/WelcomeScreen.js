import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/img/background.png")}
      style={styles.backgroundImg}
    >
      <View style={styles.logoWrap}>
        <Image source={require("../assets/logo/carrot.png")} />
        <Text style={styles.bigText}>Welcome{"\n"}to our store</Text>
        <Text style={styles.smallText}>
          Ger your groceries in as fast as one hour
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoWrap: {
    alignItems: "center",
    marginBottom: 100,
  },
  bigText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 48,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  smallText: {
    fontWeight: "400",
    fontSize: 16,
    color: "#FCFCFCB2",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#59B37C",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    width: 350,
    height: 67,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
