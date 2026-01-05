import { View, Text, StyleSheet } from "react-native";
import FeatureCard from "../components/FeatureCard";

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzes & Tests</Text>

      {["JavaScript", "React", "DSA"].map((topic) => (
        <FeatureCard
          key={topic}
          title={topic}
          subtitle="Adaptive difficulty • 10 questions"
        />
      ))}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
    paddingTop: 60,
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
