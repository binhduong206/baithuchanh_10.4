import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import SectionHeader from "../Components/SectionHeader";
import CategoryItem from "../Components/CategoryItem";
import FoodCard from "../Components/FoodCard";

const categories = [
  { id: "1", name: "Pizza", image: "https://via.placeholder.com/100" },
  { id: "2", name: "Burger", image: "https://via.placeholder.com/100" },
  { id: "3", name: "Steak", image: "https://via.placeholder.com/100" },
];

const foods = [
  {
    id: "1",
    name: "Food 1",
    price: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Food 2",
    price: 3,
    image: "https://via.placeholder.com/150",
  },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* 🔍 Search Bar */}
      <Text style={styles.title}>Explorer</Text>
      <TextInput placeholder="Search for meals or area" style={styles.search} />

      {/* 🍕 Top Categories */}
      <SectionHeader title="Top Categories" />
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />

      {/* 🍔 Popular Items */}
      <SectionHeader title="Popular Items" />
      <FlatList
        data={foods}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />

      {/* 🔥 Sale-off Items */}
      <SectionHeader title="Sale-off Items" />
      <FlatList
        data={foods}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodCard item={item} />}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },
  search: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
});
