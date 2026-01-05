import { View, Text, StyleSheet } from "react-native";
import FeatureCard from "../components/FeatureCard";

export default function RoadmapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning Roadmap</Text>

      {["Basics", "Intermediate", "Advanced"].map((stage) => (
        <FeatureCard
          key={stage}
          title={stage}
          subtitle="Topics • Mind Maps • Resources"
        />
      ))}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
});
