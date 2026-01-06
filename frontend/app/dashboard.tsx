// import { View, Text, StyleSheet } from "react-native";
// import StatCard from "../components/StatCard";

// export default function DashboardScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Learning Dashboard</Text>

//       <View style={styles.row}>
//         <StatCard title="🔥 Streak" value="5 Days" />
//         <StatCard title="⏱ Focus Time" value="2h 30m" />
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Learning Journey</Text>
//         <Text>You're making consistent progress 📈</Text>
//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 60,
//     backgroundColor: "#f9fafb",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 14,
//     padding: 16,
//     elevation: 3,
//   },
//     cardTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#4f46e5",
//     marginBottom: 6,
//   },
// });

import { ScrollView, Text, StyleSheet, View } from "react-native";
import StatCard from "../components/StatCard";
import LearningJourney from "../components/LearningJourney";

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Learning Dashboard</Text>

      <View style={styles.row}>
        <StatCard title="🔥 Streak" value="5 Days" percent={70} />
        <StatCard title="⏱ Focus Time" value="2h 30m" percent={30} />
      </View>

      <LearningJourney />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 22,
    color: "#0f172a",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});