import { StyleSheet, Text } from "react-native";
import { COLORS } from "../constants";

export default function Header() {
  return <Text style={styles.header}>Dizzy Dish</Text>;
}

const styles = StyleSheet.create({
  header: {
    marginTop: 24,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 64,
    color: COLORS.primary,
    textShadowColor: COLORS.pink,
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
  },
});
