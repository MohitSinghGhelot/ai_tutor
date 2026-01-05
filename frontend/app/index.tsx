// import { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from "react-native";
// import axios from "axios";
// import * as Speech from "expo-speech";

// const BACKEND_URL = "http://localhost:5000/api/ask";

// export default function App() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askTutor = async () => {
//     if (!question.trim()) return;

//     setLoading(true);
//     setAnswer("");

//     try {
//       const res = await axios.post(BACKEND_URL, { question });
//       setAnswer(res.data.answer);

//       Speech.speak(res.data.answer, {
//         rate: 0.9,
//         pitch: 1.0,
//       });
//     } catch (err) {
//       setAnswer("⚠️ Unable to connect to AI tutor.");
//     }

//     setLoading(false);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Header */}
//         <Text style={styles.appTitle}>AI Tutor</Text>
//         <Text style={styles.subtitle}>
//           Your personal voice-enabled learning assistant
//         </Text>

//         {/* Input Card */}
//         <View style={styles.card}>
//           <Text style={styles.label}>Ask a question</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="e.g. Explain recursion simply"
//             placeholderTextColor="#9ca3af"
//             value={question}
//             onChangeText={setQuestion}
//             multiline
//           />

//           <TouchableOpacity
//             style={styles.button}
//             onPress={askTutor}
//             disabled={loading}
//           >
//             {loading ? (
//               <ActivityIndicator color="#fff" />
//             ) : (
//               <Text style={styles.buttonText}>Ask Tutor</Text>
//             )}
//           </TouchableOpacity>
//         </View>

//         {/* Answer Card */}
//         {answer !== "" && (
//           <View style={styles.answerCard}>
//             <Text style={styles.answerTitle}>Tutor’s Answer</Text>
//             <Text style={styles.answerText}>{answer}</Text>
//           </View>
//         )}
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingTop: 60,
//     backgroundColor: "#f9fafb",
//     flexGrow: 1,
//   },

//   appTitle: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#111827",
//   },

//   subtitle: {
//     fontSize: 14,
//     color: "#6b7280",
//     marginBottom: 30,
//   },

//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     padding: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     elevation: 4,
//   },

//   label: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#374151",
//     marginBottom: 8,
//   },

//   input: {
//     minHeight: 80,
//     borderWidth: 1,
//     borderColor: "#e5e7eb",
//     borderRadius: 12,
//     padding: 12,
//     fontSize: 15,
//     color: "#111827",
//     marginBottom: 12,
//     textAlignVertical: "top",
//   },

//   button: {
//     backgroundColor: "#4f46e5",
//     paddingVertical: 14,
//     borderRadius: 12,
//     alignItems: "center",
//   },

//   buttonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   answerCard: {
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     padding: 16,
//     marginTop: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowRadius: 10,
//     elevation: 4,
//   },

//   answerTitle: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#4f46e5",
//     marginBottom: 6,
//   },

//   answerText: {
//     fontSize: 15,
//     color: "#1f2937",
//     lineHeight: 22,
//   },
// });


import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import * as Speech from "expo-speech";
import LevelChip from "../components/LevelChip";

import { askTutor } from "../services/api";


type Level = "Easy" | "Medium" | "Hard";

export default function TutorScreen() {
  const [question, setQuestion] = useState<string>("");
  const [level, setLevel] = useState<Level>("Easy");

  const speakAnswer = () => {
    Speech.speak("This is where AI response will come.", {
      rate: 0.9,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Tutor</Text>
      <Text style={styles.subtitle}>
        Personalized learning with AI guidance
      </Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Ask any question..."
          style={styles.input}
          multiline
          value={question}
          onChangeText={setQuestion}
        />

        <View style={styles.levelRow}>
          {(["Easy", "Medium", "Hard"] as Level[]).map((l) => (
            <LevelChip
              key={l}
              label={l}
              active={level === l}
              onPress={() => setLevel(l)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={speakAnswer}>
          <Text style={styles.buttonText}>Ask Tutor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },
  input: {
    minHeight: 90,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    textAlignVertical: "top",
  },
  levelRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#4f46e5",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
