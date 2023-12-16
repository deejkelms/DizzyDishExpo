import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { COLORS } from "../constants";

export default function Button({ action, label }) {
  return (
    <View
      style={[
        styles.buttonContainer,
        { borderWidth: 4, borderColor: COLORS.yellow, borderRadius: 18 },
      ]}
    >
      <Pressable
        style={[styles.button, { backgroundColor: COLORS.pink }]}
        onPress={() => action()}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // cursor: pointer;
  },
  buttonLabel: {
    textTransform: "uppercase",
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "600",
  },
});
