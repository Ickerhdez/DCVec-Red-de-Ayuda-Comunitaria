import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type CustomInputProps = {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  label?: string;
  type?: "default" | "password" | "email" | "phone";
  error?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

export default function CustomInput({
  onChangeText,
  value,
  placeholder,
  label,
  type = "default",
  error,
  autoCapitalize,
}: CustomInputProps) {
  const [isSecureText, setIsSecureText] = useState(type === "password");
  const isPasswordField = type === "password";
  const keyboardType: KeyboardTypeOptions =
    type === "email" ? "email-address" : type === "phone" ? "phone-pad" : "default";
  const iconName =
    type === "password" ? "lock-outline" : type === "email" ? "alternate-email" : type === "phone" ? "phone" : "edit-note";

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputContainer, error && styles.inputError]}>
        <MaterialIcons name={iconName} color="#5A716A" size={21} />
        <TextInput
          autoCapitalize={autoCapitalize ?? (type === "email" ? "none" : "sentences")}
          autoCorrect={false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#84958F"
          secureTextEntry={isSecureText}
          style={styles.input}
          value={value}
        />
        {isPasswordField ? (
          <TouchableOpacity accessibilityRole="button" onPress={() => setIsSecureText((current) => !current)}>
            <Ionicons color="#5A716A" name={isSecureText ? "eye-outline" : "eye-off-outline"} size={21} />
          </TouchableOpacity>
        ) : null}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    color: "#24453E",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 7,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#F2F7F4",
    borderColor: "#D6E4DE",
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 54,
    paddingHorizontal: 16,
  },
  input: {
    color: "#173B35",
    flex: 1,
    fontSize: 15,
    marginLeft: 12,
    paddingVertical: 4,
  },
  errorText: {
    color: "#B43F3F",
    fontSize: 12,
    marginTop: 6,
  },
  inputError: {
    borderColor: "#B43F3F",
  },
});
