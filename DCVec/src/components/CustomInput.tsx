import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type CustomInputProps = {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  type?: "default" | "password" | "email" | "number";
};

export default function CustomInput({
  onChangeText,
  value,
  placeholder,
  type = "default",
}: CustomInputProps) {
    const [isSecureText, setIsSecureText] = useState(type === "password");

    const isPasswordField = type === "password";

    const iconName: (typeof MaterialIcons)["name"] | undefined = 
        type === "password" ? "lock" : 
            type === "email" ? "alternate-email" : undefined

    const keyboardType: KeyboardTypeOptions =
    type === "email"
      ? "email-address"
      : type === "number"
        ? "number-pad"
        : "default";

  const error =
    type === "email" && value && !value.includes("@")
      ? "Correo inválido"
      : type === "password" && value && value.length < 4
        ? "La contraseña es débil"
        : "";

  return (
    <View style={styles.wrapper}>
      <View style={[styles.inputContainer, error && styles.inputError]}>
       <MaterialIcons name={iconName as any} size={22} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={isSecureText}
        />
       { isPasswordField && <TouchableOpacity
            onPress={()=>{
                setIsSecureText(!isSecureText);
            }}>
            <Ionicons name="eye" size={22}/>
        </TouchableOpacity>}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor:'lightgray',
    //distribucion de componentes con flexbox
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 9, 
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,

  },
  input: {
    width: "70%",
  },
  errorText: {
    color: "red",
    marginTop: 6,
  },
  inputError: {
    borderColor: "red",
  },
});
