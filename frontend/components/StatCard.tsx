import { View, Text, StyleSheet } from "react-native";

interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginRight: 10,
    elevation: 4,
  },
  title: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 6,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111827",
  },
});
