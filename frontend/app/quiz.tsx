// import { View, Text, StyleSheet } from "react-native";
// import FeatureCard from "../components/FeatureCard";

// export default function QuizScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Quizzes & Tests</Text>

//       {["JavaScript", "React", "DSA"].map((topic) => (
//         <FeatureCard
//           key={topic}
//           title={topic}
//           subtitle="Adaptive difficulty • 10 questions"
//         />
//       ))}
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9fafb",
//     padding: 20,
//     paddingTop: 60,
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
//     marginBottom: 12,
//     elevation: 3,
//   },
// });
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function QuizScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Quizzes & Tests</Text>
        <Text style={styles.subtitle}>
          Practice smart. Difficulty adapts to you.
        </Text>
      </View>

      {/* AI RECOMMENDATION */}
      <View style={styles.aiCard}>
        <Text style={styles.aiBadge}>🤖 AI Recommendation</Text>
        <Text style={styles.aiTitle}>React Fundamentals</Text>
        <Text style={styles.aiDesc}>
          Based on your recent activity, this quiz will strengthen weak areas.
        </Text>

        <TouchableOpacity style={styles.aiButton}>
          <Text style={styles.aiButtonText}>Start Smart Quiz</Text>
        </TouchableOpacity>
      </View>

      {/* QUIZ LIST */}
      <Text style={styles.sectionTitle}>Available Quizzes</Text>

      <QuizItem
        icon="🟨"
        title="JavaScript"
        difficulty="Adaptive"
        progress="70%"
      />

      <QuizItem
        icon="⚛️"
        title="React"
        difficulty="Adaptive"
        progress="45%"
      />

      <QuizItem
        icon="🧠"
        title="DSA"
        difficulty="Adaptive"
        progress="20%"
      />
    </ScrollView>
  );
}

/* QUIZ ITEM COMPONENT */
function QuizItem({ icon, title, difficulty, progress }: any) {
  return (
    <View style={styles.quizCard}>
      <View style={styles.quizTop}>
        <View style={styles.quizIcon}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.quizTitle}>{title}</Text>
          <Text style={styles.quizMeta}>
            {difficulty} difficulty · Progress {progress}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.startBtnText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },

  /* HEADER */
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 15,
    color: "#64748b",
  },

  /* AI CARD */
  aiCard: {
    backgroundColor: "#eef2ff",
    borderRadius: 22,
    padding: 20,
    marginBottom: 28,
  },
  aiBadge: {
    fontSize: 13,
    fontWeight: "700",
    color: "#4338ca",
    marginBottom: 8,
  },
  aiTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1e1b4b",
  },
  aiDesc: {
    fontSize: 14,
    color: "#3730a3",
    marginTop: 6,
    lineHeight: 20,
  },
  aiButton: {
    marginTop: 14,
    backgroundColor: "#6366f1",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  aiButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 15,
  },

  /* SECTION */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 14,
  },

  /* QUIZ CARD */
  quizCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
    shadowColor: "#6366f1",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  quizTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  quizIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  iconText: {
    fontSize: 26,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
  },
  quizMeta: {
    marginTop: 4,
    fontSize: 14,
    color: "#64748b",
  },

  /* BUTTON */
  startBtn: {
    marginTop: 14,
    backgroundColor: "#0f172a",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  startBtnText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
});