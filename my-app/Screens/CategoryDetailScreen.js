import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const categoryProducts = {
  Beverages: [
    {
      id: 1,
      name: "Diet Coke",
      description: "355ml, Price",
      price: "$1.99",
      image: require("../assets/img/beveitem/coke.png"),
    },
    {
      id: 2,
      name: "Sprite Can",
      description: "325ml, Price",
      price: "$1.50",
      image: require("../assets/img/beveitem/sprite.png"),
    },
    {
      id: 3,
      name: "Apple & Grape Juice",
      description: "2L, Price",
      price: "$15.99",
      image: require("../assets/img/beveitem/applejuice.png"),
    },
    {
      id: 4,
      name: "Orenge Juice",
      description: "2L, Price",
      price: "$15.99",
      image: require("../assets/img/beveitem/orangejuice.png"),
    },
    {
      id: 5,
      name: "Coca Cola Can",
      description: "330ml, Price",
      price: "$4.99",
      image: require("../assets/img/beveitem/coca.png"),
    },
    {
      id: 6,
      name: "Pepsi Can",
      description: "330ml, Price",
      price: "$4.99",
      image: require("../assets/img/beveitem/pepsi.png"),
    },
  ],
};

export default function CategoryDetailScreen({ route, navigation }) {
  const category = route.params?.category;
  const categoryName = category?.name || "Products";

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {categoryProducts[categoryName]?.map((product) => (
            <View key={product.id} style={styles.productCardWrapper}>
              <TouchableOpacity style={styles.productCard}>
                <View style={styles.imageContainer}>
                  <Image source={product.image} style={styles.productImage} />
                </View>

                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDesc}>{product.description}</Text>

                <View style={styles.priceContainer}>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Ionicons
                      name="add"
                      size={20}
                      color="#FFFFFF"
                      style={{ fontWeight: "600" }}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  scrollContent: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  productCardWrapper: {
    width: "47%",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  imageContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    // textAlign: "center",
    marginBottom: 4,
  },
  productDesc: {
    fontSize: 12,
    color: "#7C7C7C",
    // textAlign: "center",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: "#53B175",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
