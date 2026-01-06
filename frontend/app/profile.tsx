// import { View, Text, StyleSheet } from "react-native";

// export default function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Performance & Achievements</Text>

//       <View style={styles.card}>
//         <Text>🏆 Achievements</Text>
//         <Text>✔ 10 Quizzes Completed</Text>
//         <Text>✔ 5-Day Learning Streak</Text>
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
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 14,
//     padding: 16,
//     elevation: 3,
//   },
// });

import { View, Text, StyleSheet, ScrollView } from "react-native";
export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Performance & Achievements</Text>

      {/* HERO CARD */}
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Your Learning Stats</Text>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Quizzes</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statValue}>5🔥</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>

          <View style={styles.statItem}>
            <Text style={styles.statValue}>8h</Text>
            <Text style={styles.statLabel}>Focus</Text>
          </View>
        </View>
      </View>

      {/* ACHIEVEMENTS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Achievements</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeIcon}>🏆</Text>
          <Text style={styles.badgeText}>10 Quizzes Completed</Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeIcon}>🔥</Text>
          <Text style={styles.badgeText}>5-Day Learning Streak</Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeIcon}>🎯</Text>
          <Text style={styles.badgeText}>Consistent Learner</Text>
        </View>
      </View>

      {/* AI INSIGHT */}
      <View style={styles.aiCard}>
        <Text style={styles.aiTitle}>AI Insight</Text>
        <Text style={styles.aiText}>
          You learn best with consistency. Keep your daily streak alive to
          improve retention by 2× 🚀
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 20,
    color: "#0f172a",
  },

  /* HERO CARD */
  heroCard: {
    backgroundColor: "#6366f1",
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  heroTitle: {
    color: "#e0e7ff",
    fontSize: 16,
    marginBottom: 14,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "800",
  },
  statLabel: {
    color: "#c7d2fe",
    fontSize: 13,
    marginTop: 4,
  },

  /* COMMON CARD */
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 22,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
    color: "#4f46e5",
  },

  /* BADGES */
  badge: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  badgeIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  badgeText: {
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },

  /* AI CARD */
  aiCard: {
    backgroundColor: "#eef2ff",
    borderRadius: 18,
    padding: 18,
  },
  aiTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4338ca",
    marginBottom: 6,
  },
  aiText: {
    fontSize: 14,
    color: "#3730a3",
    lineHeight: 20,
  },
});