import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ProductItem({
  image,
  title,
  description,
  price,
  onAddPress,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.imageItemContainer}>
        <Image source={image} style={styles.imageItem} />
      </View>

      <View style={styles.textItemContainer}>
        <Text style={{ fontSize: 16, fontWeight: 800 }}>{title}</Text>
        <Text style={{ color: "#7C7C7C" }}>{description}</Text>
      </View>

      <View style={styles.bottomItemContainer}>
        <Text style={{ fontWeight: 600, fontSize: 18 }}>{price}</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
          <Ionicons
            name="add"
            size={18}
            color="#FFFFFF"
            style={{ fontWeight: 600 }}
          />
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
