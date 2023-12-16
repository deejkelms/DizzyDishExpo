import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Button from "./components/Button";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Label from "./components/Label";

import { dishes, COLORS } from "./constants";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  const [selectedDish, setSelectedDish] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  if (!dishes) return null;

  const letUsFeast = () => {
    setSelectedDish("");
    setIsSpinning(true);

    const randomInt = Math.floor(Math.random() * dishes.length);

    // Simulate a delay before stopping the spinning
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedDish(dishes[randomInt]);
    }, 3000); // Adjust the delay as needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.labelContainer}>
        <Label label={selectedDish} />
      </View>
      <View style={styles.imageContainer}>
        <Spinner isSpinning={isSpinning} />
      </View>
      <View style={styles.footerContainer}>
        <Button action={letUsFeast} label="What should we eat?" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    alignItems: "center",
  },
  labelContainer: {
    flex: 1 / 8,
    marginTop: 24,
  },
  imageContainer: {
    flex: 1,
    marginTop: 24,
  },
  footerContainer: {
    flex: 1 / 4,
  },
});
