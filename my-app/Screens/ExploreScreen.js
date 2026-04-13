import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const categories = [
  {
    id: 1,
    name: "Fresh Fruits & Vegetable",
    image: require("../assets/img/vege.png"),
    backgroundColor: "#E8F5E9",
  },
  {
    id: 2,
    name: "Cooking Oil & Ghee",
    image: require("../assets/img/oi.png"),
    backgroundColor: "#FFF3E0",
  },
  {
    id: 3,
    name: "Meat & Fish",
    image: require("../assets/img/meat.png"),
    backgroundColor: "#FDEAEA",
  },
  {
    id: 4,
    name: "Bakery & Snacks",
    image: require("../assets/img/bakery.png"),
    backgroundColor: "#F3E5F5",
  },
  {
    id: 5,
    name: "Dairy & Eggs",
    image: require("../assets/img/egg.png"),
    backgroundColor: "#FFFDE7",
  },
  {
    id: 6,
    name: "Beverages",
    image: require("../assets/img/beve.png"),
    backgroundColor: "#E1F5FE",
  },
];

export default function ExploreScreen({ navigation }) {
  const renderCategoryItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.categoryCard, { backgroundColor: item.backgroundColor }]}
      onPress={() => navigation.navigate("CategoryDetail", { category: item })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>Find Products</Text>
            </View>

            <View style={styles.searchBarContainer}>
              <Ionicons name="search" size={25} color="#181B19" />
              <TextInput
                style={styles.searchBar}
                placeholder="Search Store"
                placeholderTextColor="#A9AAAA"
              />
            </View>

            <View style={styles.gridContainer}>
              {categories.map((item) => renderCategoryItem(item))}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  titleTextContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
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
    marginBottom: 25,
  },
  searchBar: {
    flex: 1,
    height: 52,
    fontSize: 14,
    fontWeight: "600",
    color: "#4C4F4D",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  columnWrapper: {
    justifyContent: "space-between",
    gap: 15,
  },
  categoryCard: {
    width: "47%",
    height: 170,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#1C1C1C",
  },
});
