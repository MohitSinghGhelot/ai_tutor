// import { View, Text, StyleSheet, Dimensions } from "react-native";
// import { LineChart } from "react-native-chart-kit";

// const screenWidth = Dimensions.get("window").width;

// export default function WeeklyProgress() {
//   return (
//     <View style={styles.card}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Learning Journey</Text>
//         <Text style={styles.total}>This Week: 8h 20m</Text>
//       </View>

//       <Text style={styles.subText}>
//         You're making consistent progress 📈
//       </Text>

//       <LineChart
//         data={{
//           labels: ["S", "M", "T", "W", "T", "F", "S"],
//           datasets: [
//             {
//               data: [0, 0.3, 0.6, 1.2, 2.1, 2.5, 3],
//             },
//           ],
//         }}
//         width={screenWidth - 48}
//         height={220}
//         bezier
//         withShadow
//         chartConfig={{
//           backgroundGradientFrom: "#ffffff",
//           backgroundGradientTo: "#ffffff",
//           color: () => "#8b5cf6",
//           labelColor: () => "#6b7280",
//           propsForDots: {
//             r: "6",
//             strokeWidth: "2",
//             stroke: "#8b5cf6",
//           },
//         }}
//         style={{ borderRadius: 16, marginTop: 16 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 20,
//     padding: 16,
//     marginTop: 20,
//     elevation: 3,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#4f46e5",
//   },
//   total: {
//     fontSize: 14,
//     color: "#6b7280",
//   },
//   subText: {
//     marginTop: 6,
//     color: "#6b7280",
//   },
// });
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const width = Dimensions.get("window").width - 40;

export default function WeeklyProgress() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Learning Journey</Text>
          <Text style={styles.sub}>
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
        height={230}
        bezier
        withShadow
        withDots
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 1,
          color: () => "#8b5cf6",
          labelColor: () => "#6b7280",
          propsForDots: {
            r: "6",
            strokeWidth: "3",
            stroke: "#8b5cf6",
          },
          propsForBackgroundLines: {
            strokeDasharray: "6 6",
            stroke: "#ddd6fe",
          },
        }}
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    marginTop: 22,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4f46e5",
  },
  sub: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
  },
  week: {
    fontSize: 13,
    color: "#6b7280",
  },
  chart: {
    marginTop: 10,
    borderRadius: 16,
  },
});