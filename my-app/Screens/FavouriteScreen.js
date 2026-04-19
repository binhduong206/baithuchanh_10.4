import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import products from "../data/data.js";

export default function FavouriteScreen() {
  // const { addToCart } = useCart(); // Lấy hàm thêm vào giỏ từ Context

  // Hàm xử lý khi bấm "Add All To Cart"
  const handleAddAllToCart = () => {
    // favouriteData.forEach(item => addToCart(item)); // Gọi vòng lặp để thêm tất cả vào giỏ
    Alert.alert(
      "Thành công",
      "Đã thêm tất cả sản phẩm yêu thích vào giỏ hàng!",
    );
  };

  // Render từng item trong danh sách
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.productImgUrl} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.product_name}</Text>
        <Text style={styles.itemLabel}>{item.display_label}</Text>
      </View>

      <View style={styles.itemRight}>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Ionicons name="chevron-forward" size={24} color="#181725" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />

      {/* Nút Add All To Cart ở Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addAllButton}
          onPress={handleAddAllToCart}
        >
          <Text style={styles.addAllButtonText}>Add All To Cart</Text>
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
  header: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181725",
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 60,
    resizeMode: "contain",
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
    marginBottom: 5,
  },
  itemLabel: {
    fontSize: 14,
    color: "#7C7C7C",
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
    marginRight: 10, // Tạo khoảng cách giữa giá và mũi tên
  },
  separator: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginHorizontal: 20, // Để đường kẻ không chạm sát lề 2 bên
  },
  footer: {
    padding: 20,
    paddingBottom: 30, // Chừa khoảng trống cho an toàn (SafeArea)
  },
  addAllButton: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  addAllButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
