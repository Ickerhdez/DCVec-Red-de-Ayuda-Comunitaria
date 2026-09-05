import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  loading?: boolean;
};

export default function CustomButton({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.button, styles[variant], (disabled || loading) && styles.disabled]}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? "#FFFFFF" : "#174A42"} />
      ) : (
        <Text style={[styles.buttonTitle, variant === "tertiary" && styles.tertiaryTitle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 14,
    justifyContent: "center",
    minHeight: 52,
    paddingHorizontal: 18,
    width: "100%",
  },
  primary: {
    backgroundColor: "#174A42",
  },
  secondary: {
    backgroundColor: "#DDEDE8",
  },
  tertiary: {
    backgroundColor: "transparent",
    minHeight: 42,
  },
  disabled: {
    opacity: 0.55,
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  tertiaryTitle: {
    color: "#174A42",
  },
});
