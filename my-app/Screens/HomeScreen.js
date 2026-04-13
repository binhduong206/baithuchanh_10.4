import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import ProductItem from "../components/ProductItem";

const products = [
  {
    id: 1,
    image: require("../assets/img/item/banana.png"),
    title: "Organic Bananas",
    description: "7pcs, Priceg",
    price: "$4.99",
  },
  {
    id: 2,
    image: require("../assets/img/item/apple.png"),
    title: "Red Apples",
    description: "1kg, Priceg",
    price: "$4.99",
  },
  {
    id: 3,
    image: require("../assets/img/item/banana.png"),
    title: "Organic Oranges",
    description: "8pcs, Priceg",
    price: "$5.99",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.logoContainer}>
              <Image source={require("../assets/logo/carot.png")} />
            </View>

            <View style={styles.locationContainer}>
              <Ionicons name="location" size={20} />
              <Text style={styles.textLocation}>Dhaka, Banassre</Text>
            </View>

            <View style={styles.searchBarContainer}>
              <Ionicons name="search" size={25} color="#181B19" />
              <TextInput
                style={styles.searchBar}
                placeholder="Search Store"
                placeholderTextColor="#A9AAAA"
              />
            </View>

            <View style={styles.bannerContainer}>
              <Image source={require("../assets/img/banner.png")} />
            </View>

            <View style={styles.exclusiveOfferContainer}>
              <View style={styles.exclusiveOfferTextContainer}>
                <Text style={styles.exclusiveText}>Exclusive Offer</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                style={styles.listItemContainer}
                contentContainerStyle={styles.listItemContentContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
              >
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    onAddPress={() => console.log(`Added ${product.title}`)}
                    onPress={() =>
                      navigation.navigate("ProductDetail", { product })
                    }
                  />
                ))}
              </ScrollView>
            </View>

            <View style={styles.exclusiveOfferContainer}>
              <View style={styles.exclusiveOfferTextContainer}>
                <Text style={styles.exclusiveText}>Best Selling</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
              </View>

              <ScrollView
                style={styles.listItemContainer}
                contentContainerStyle={styles.listItemContentContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
              >
                {products.map((product) => (
                  <ProductItem
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    onAddPress={() => console.log(`Added ${product.title}`)}
                    onPress={() =>
                      navigation.navigate("ProductDetail", { product })
                    }
                  />
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
    marginTop: 10,
  },
  textLocation: {
    color: "#4C4F4D",
    fontSize: 18,
    fontWeight: 600,
  },
  searchBarContainer: {
    width: "100%",
    height: 52,
    flexDirection: "row",
    backgroundColor: "#F2F3F2",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 10,
    marginTop: 20,
  },
  searchBar: {
    flex: 1,
    height: 52,
    fontSize: 14,
    fontWeight: "600",
    color: "#4C4F4D",
  },

  bannerContainer: {
    marginTop: 20,
  },

  exclusiveOfferContainer: {
    marginTop: 25,
    width: "100%",
  },

  exclusiveOfferTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  exclusiveText: {
    fontSize: 24,
    fontWeight: 600,
  },

  seeAllText: {
    fontSize: 16,
    fontWeight: 600,
    color: "#53B175",
  },

  listItemContainer: {
    marginTop: 25,
    height: 248,
  },

  listItemContentContainer: {
    gap: 15,
    paddingEnd: 20,
  },
});
