import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function Login({navigation} : any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email.includes("@")) {
      setError("Ingresa un correo válido.");
      return;
    }

    if (password.length < 4) {
      setError("La contraseña debe tener al menos 4 caracteres.");
      return;
    }

    setError("");
    navigation.navigate('UserTabs', {screen:'HomeTab', params:{email}});
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CustomInput
        onChangeText={setEmail}
        value={email}
        placeholder={"Ingresa tu email"}
        type="email"
      />
      <CustomInput
        onChangeText={setPassword}
        value={password}
        placeholder={"Ingresa tu contraseña"}
        type="password"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <CustomButton
        title="Iniciar Sesion"
        onPress={handleLogin}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
