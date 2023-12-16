import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Image, Easing } from "react-native";
const DizzyDish = require("../assets/images/dizzyDishNative.png");
export default function Spinner({ isSpinning }) {
  const spinValue = useRef(new Animated.Value(0)).current;

  const startSpinAnimation = () => {
    spinValue.setValue(0); // Reset the animated value to 0
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000, // Adjust the duration
      easing: Easing.easeOut, // Adjust the timing function
      useNativeDriver: true,
    }).start(() => {
      console.log("start spinning called?");
    });
  };

  useEffect(() => {
    if (isSpinning) {
      startSpinAnimation();
    }
  }, [isSpinning]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "1800deg"], // Adjust the degrees for a single rotation
  });

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <Image source={DizzyDish} style={styles.image} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  },
});
