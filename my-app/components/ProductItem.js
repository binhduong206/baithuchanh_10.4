import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useCart } from "../data/cart.js";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProductItem({ product, onPress }) {
  if (!product) return null; // 🛡️ chặn lỗi

  const { addToCart } = useCart();

  // SỬA Ở ĐÂY: Không truyền tham số (product) vào hàm này nữa
  const handleAddToCart = () => {
    addToCart(product); // Gọi trực tiếp product từ props
    // Alert.alert("Thành công", `Đã thêm ${product.product_name} vào giỏ!`);
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.imageItemContainer}>
        <Image source={product.productImgUrl} style={styles.imageItem} />
      </View>

      <View style={styles.textItemContainer}>
        <Text style={{ fontSize: 16, fontWeight: "800" }}>
          {product.product_name}
        </Text>
        <Text style={{ color: "#7C7C7C" }}>{product.unit_info}</Text>
      </View>

      <View style={styles.bottomItemContainer}>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>
          ${product.price}
        </Text>
        {/* Nút bấm Add To Cart */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Ionicons name="add" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 173,
    height: 248,
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 15,
    borderColor: "#E2E2E2",
    justifyContent: "space-evenly",
  },

  imageItemContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  imageItem: {
    width: 100,
    height: 80,
  },

  textItemContainer: {},

  bottomItemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addButton: {
    width: 45,
    height: 45,
    backgroundColor: "#53B175",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
});
