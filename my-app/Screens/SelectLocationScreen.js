import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function SelectLocationScreen({ navigation }) {
  const [selectedZone, setSelectedZone] = useState("Banasree");
  const [selectedArea, setSelectedArea] = useState("");
  const [showZoneDropdown, setShowZoneDropdown] = useState(false);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);

  const zones = ["Banasree", "Dhaka", "Chittagong", "Sylhet"];
  const areas = ["Residential", "Commercial", "Industrial", "Mixed"];

  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </TouchableOpacity>
      </View>

      {/* Location Icon */}
      <View style={styles.iconContainer}>
        <Image source={require("../assets/logo/location.png")} />
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with{"\n"}what's happening in
        your area
      </Text>

      {/* Form Section */}
      <View style={styles.formContainer}>
        {/* Your Zone */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Your Zone</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowZoneDropdown(!showZoneDropdown)}
          >
            <Text style={styles.dropdownText}>{selectedZone}</Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          {showZoneDropdown && (
            <View style={styles.dropdownMenu}>
              {zones.map((zone) => (
                <TouchableOpacity
                  key={zone}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedZone(zone);
                    setShowZoneDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{zone}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Your Area */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Your Area</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowAreaDropdown(!showAreaDropdown)}
          >
            <Text
              style={[
                styles.dropdownText,
                !selectedArea && styles.placeholderText,
              ]}
            >
              {selectedArea || "Types of your area"}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          {showAreaDropdown && (
            <View style={styles.dropdownMenu}>
              {areas.map((area) => (
                <TouchableOpacity
                  key={area}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedArea(area);
                    setShowAreaDropdown(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{area}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 30,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  locationIcon: {
    width: 120,
    height: 120,
    backgroundColor: "#6B5FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#828282",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 20,
  },
  formContainer: {
    marginBottom: 40,
  },
  formGroup: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingVertical: 15,
    paddingHorizontal: 0,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  placeholderText: {
    color: "#999",
    fontWeight: "400",
  },
  dropdownArrow: {
    fontSize: 12,
    color: "#999",
  },
  dropdownMenu: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    marginTop: 5,
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  dropdownItemText: {
    fontSize: 14,
    color: "#000",
  },
  submitButton: {
    backgroundColor: "#53B175",
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
});
