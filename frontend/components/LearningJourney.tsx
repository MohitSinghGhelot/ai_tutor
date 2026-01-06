import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const width = Dimensions.get("window").width - 48;

export default function LearningJourney() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Learning Journey</Text>
          <Text style={styles.subtitle}>
            You're making consistent progress 📈
          </Text>
        </View>
        <Text style={styles.week}>This Week: 8h 20m</Text>
      </View>

      <LineChart
        data={{
          labels: ["S", "M", "T", "W", "T", "F", "S"],
          datasets: [{ data: [0, 0.3, 0.6, 1.1, 2.1, 2.4, 3] }],
        }}
        width={width}
        height={240}
        bezier
        withDots
        withShadow
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1,
          color: () => "#8b5cf6",
          labelColor: () => "#6b7280",
          propsForDots: {
            r: "7",
            strokeWidth: "3",
            stroke: "#8b5cf6",
          },
          propsForBackgroundLines: {
            strokeDasharray: "6 6",
            stroke: "#ddd6fe",
          },
          fillShadowGradientFrom: "#c7d2fe",
          fillShadowGradientTo: "#ffffff",
        }}
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 20,
    marginTop: 26,
    shadowColor: "#6366f1",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4f46e5",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 2,
  },
  week: {
    fontSize: 14,
    color: "#6b7280",
  },
  chart: {
    marginTop: 10,
    borderRadius: 18,
  },
});