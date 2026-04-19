import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useRef } from "react";

export default function ProductDetail({ route, navigation }) {
  const product = route.params?.product;
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const flatListRef = useRef(null);

  const images = product
    ? [product.productImgUrl, product.productImgUrl, product.productImgUrl]
    : [];

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / 350);
    setCurrentImageIndex(index);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Ionicons name="chevron-back" size={28} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="share-social" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Image Carousel */}
        <View style={styles.carouselContainer}>
          <FlatList
            ref={flatListRef}
            data={images}
            renderItem={({ item }) => (
              <View style={styles.imageWrapper}>
                <Image source={item} style={styles.productImage} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />

          {/* Carousel Indicator */}
          <View style={styles.indicatorContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentImageIndex && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.productName}>
                {product?.product_name || "Product"}
              </Text>
              <Text style={styles.productDesc}>
                {product?.display_label || "No description"}
              </Text>
            </View>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={28}
                color={isFavorite ? "#E74C3C" : "#000"}
              />
            </TouchableOpacity>
          </View>

          {/* Quantity & Price */}
          <View style={styles.quantityPriceContainer}>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                onPress={() => quantity > 1 && setQuantity(quantity - 1)}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={() => setQuantity(quantity + 1)}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>{"$" + product?.price || "$0.00"}</Text>
          </View>
        </View>

        {/* Product Detail Section */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => toggleSection("detail")}
          >
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Ionicons
              name={
                expandedSection === "detail" ? "chevron-up" : "chevron-down"
              }
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          {expandedSection === "detail" && (
            <Text style={styles.sectionContent}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples
              May Be Good For Your Heart. As Part Of A Healthful And Varied
              Diet.
            </Text>
          )}
        </View>

        {/* Nutritions Section */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => toggleSection("nutrition")}
          >
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.nutritionTag}>
              <Text style={styles.nutritionTagText}>100g</Text>
            </View>
            <Ionicons
              name={
                expandedSection === "nutrition" ? "chevron-up" : "chevron-down"
              }
              size={24}
              color="#000"
            />
          </TouchableOpacity>
          {expandedSection === "nutrition" && (
            <View style={styles.nutritionList}>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Energy</Text>
                <Text style={styles.nutritionValue}>52 kcal</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Protein</Text>
                <Text style={styles.nutritionValue}>0.3 g</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Carbohydrates</Text>
                <Text style={styles.nutritionValue}>14 g</Text>
              </View>
              <View style={styles.nutritionItem}>
                <Text style={styles.nutritionLabel}>Fat</Text>
                <Text style={styles.nutritionValue}>0.2 g</Text>
              </View>
            </View>
          )}
        </View>

        {/* Review Section */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => toggleSection("review")}
          >
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name="star"
                  size={16}
                  color="#F59E0B"
                  style={{ marginRight: 2 }}
                />
              ))}
            </View>
            <Ionicons
              name={
                expandedSection === "review" ? "chevron-up" : "chevron-down"
              }
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Add to Basket Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  carouselContainer: {
    height: 350,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
  },
  imageWrapper: {
    width: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    gap: 6,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  activeIndicator: {
    width: 24,
    backgroundColor: "#53B175",
  },
  productInfoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  productName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#000",
  },
  productDesc: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 5,
  },
  quantityPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    paddingHorizontal: 10,
    gap: 15,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#53B175",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  price: {
    fontSize: 28,
    fontWeight: "800",
    color: "#000",
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    flex: 1,
  },
  sectionContent: {
    marginTop: 12,
    fontSize: 14,
    color: "#7C7C7C",
    lineHeight: 22,
  },
  nutritionTag: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 10,
  },
  nutritionTagText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7C7C7C",
  },
  nutritionList: {
    marginTop: 12,
    gap: 12,
  },
  nutritionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nutritionLabel: {
    fontSize: 14,
    color: "#7C7C7C",
    fontWeight: "500",
  },
  nutritionValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  starsContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
  },
  addButton: {
    backgroundColor: "#53B175",
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
