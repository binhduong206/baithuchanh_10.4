import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { useCart } from "../data/cart.js";

export default function CartScreen() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } =
    useCart();

  // Tính tổng tiền
  const getTotalPrice = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return total.toFixed(2); // Giữ 2 chữ số thập phân
  };

  // Component render từng sản phẩm
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.productImgUrl} style={styles.itemImage} />

      <View style={styles.itemDetails}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemName} numberOfLines={1}>
            {item.product_name}
          </Text>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Text style={styles.removeIcon}>✕</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.itemUnit}>{item.display_label}</Text>

        <View style={styles.bottomRow}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={() => decreaseQuantity(item.id)}
            >
              <Text style={styles.quantityBtnText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{item.quantity}</Text>

            <TouchableOpacity
              style={[styles.quantityBtn, styles.quantityBtnPlus]}
              onPress={() => increaseQuantity(item.id)}
            >
              <Text style={[styles.quantityBtnText, styles.plusText]}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.itemPrice}>
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Hiển thị thông báo nếu giỏ hàng trống */}
      {cartItems.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Giỏ hàng của bạn đang trống</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Ẩn nút checkout nếu giỏ hàng trống */}
      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Go to Checkout</Text>
            <View style={styles.checkoutPriceContainer}>
              <Text style={styles.checkoutPriceText}>${getTotalPrice()}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

// CÁC STYLE BÊN DƯỚI GIỮ NGUYÊN (thêm phần emptyCartContainer)
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
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
  },
  itemImage: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
    flex: 1,
    marginRight: 10,
  },
  removeIcon: {
    fontSize: 18,
    color: "#B3B3B3",
    padding: 5,
  },
  itemUnit: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 5,
    marginBottom: 12,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityBtn: {
    width: 35,
    height: 35,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },
  quantityBtnPlus: {
    borderColor: "#53B175",
  },
  quantityBtnText: {
    fontSize: 20,
    color: "#B3B3B3",
    fontWeight: "500",
  },
  plusText: {
    color: "#53B175",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 15,
    color: "#181725",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181725",
  },
  separator: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },
  footer: {
    padding: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: "#E2E2E2",
  },
  checkoutButton: {
    backgroundColor: "#53B175",
    borderRadius: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    position: "relative",
  },
  checkoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  checkoutPriceContainer: {
    position: "absolute",
    right: 20,
    backgroundColor: "#489E67",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  checkoutPriceText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  // Thêm style cho trạng thái giỏ hàng trống
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 16,
    color: "#7C7C7C",
  },
});
