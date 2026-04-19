import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

export default function FilterScreen({ navigation }) {
  const route = useRoute();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = ["Eggs", "Noodles & Pasta", "Chips & Crisps", "Fast Food"];
  const brands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farmas"];

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const renderCheckbox = (item, list, setList) => {
    const isSelected = list.includes(item);

    return (
      <TouchableOpacity
        key={item}
        style={styles.checkboxItem}
        onPress={() => toggleItem(item, list, setList)}
      >
        <View style={[styles.checkbox, isSelected && styles.checkedBox]}>
          {isSelected && <Ionicons name="checkmark" size={14} color="#fff" />}
        </View>

        <Text style={[styles.checkboxText, isSelected && styles.activeText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={26} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Filters</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {categories.map((item) =>
          renderCheckbox(item, selectedCategories, setSelectedCategories),
        )}

        <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Brand</Text>
        {brands.map((item) =>
          renderCheckbox(item, selectedBrands, setSelectedBrands),
        )}
      </ScrollView>

      {/* APPLY */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => {
            const filters = {
              selectedCategories,
              selectedBrands,
            };
            console.log("SEND FILTER:", filters); // 🔥 THÊM
            route.params?.onApplyFilter(filters); // 🔥 callback
            navigation.goBack();
          }}
        >
          <Text style={styles.applyText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F3F2" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },

  headerTitle: { fontSize: 18, fontWeight: "600" },

  content: {
    backgroundColor: "#fff",
    marginHorizontal: 15,
    borderRadius: 20,
    padding: 20,
    paddingBottom: 120,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  checkedBox: {
    backgroundColor: "#53B175",
    borderColor: "#53B175",
  },

  checkboxText: { fontSize: 15 },

  activeText: { color: "#53B175", fontWeight: "600" },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
  },

  applyButton: {
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
  },

  applyText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
