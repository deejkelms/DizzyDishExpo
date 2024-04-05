import { StyleSheet, Text } from "react-native";
import { COLORS } from "../constants";

export default function Label({ label }) {
  return <Text style={styles.foodLabel}>{label}</Text>;
}

const styles = StyleSheet.create({
  foodLabel: {
    color: COLORS.tertiary,
    fontSize: 38,
    fontWeight: "bold",
  },
});
