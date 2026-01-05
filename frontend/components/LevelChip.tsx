import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  active: boolean;
  onPress: () => void;
}

export default function LevelChip({ label, active, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.active]}
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.activeText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginRight: 8,
  },
  active: {
    backgroundColor: "#4f46e5",
    borderColor: "#4f46e5",
  },
  text: {
    fontSize: 13,
    color: "#374151",
  },
  activeText: {
    color: "#ffffff",
    fontWeight: "600",
  },
});
