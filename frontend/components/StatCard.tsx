// import { View, Text, StyleSheet } from "react-native";

// interface StatCardProps {
//   title: string;
//   value: string;
// }

// export default function StatCard({ title, value }: StatCardProps) {
//   return (
//     <View style={styles.card}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.value}>{value}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     padding: 16,
//     marginRight: 10,
//     elevation: 4,
//   },
//   title: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 6,
//   },
//   value: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#111827",
//   },
// });
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";

type Props = {
  title: string;
  value: string;
  percent: number;
};

export default function StatCard({ title, value, percent }: Props) {
  const radius = 30;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * percent) / 100;

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>

      <View style={styles.donut}>
        <Svg width={80} height={80}>
          <Defs>
            <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#8b5cf6" />
              <Stop offset="100%" stopColor="#6366f1" />
            </LinearGradient>
          </Defs>

          <Circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />

          <Circle
            cx="40"
            cy="40"
            r={radius}
            stroke="url(#grad)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="none"
            rotation="-90"
            origin="40,40"
          />
        </Svg>

        <Text style={styles.centerText}>{percent}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 6,
    shadowColor: "#6366f1",
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  title: {
    fontSize: 14,
    color: "#6b7280",
  },
  value: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginTop: 6,
  },
  donut: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
});