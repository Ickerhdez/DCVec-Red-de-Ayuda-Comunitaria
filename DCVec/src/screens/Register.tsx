import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { RegisterScreenProps } from "../navigation/StackNavigator";
import { isValidEmail, isValidPhone, required } from "../utils/validation";

export default function Register({ navigation }: RegisterScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nameError = submitted ? required(name, "Tu nombre") : "";
  const emailError = submitted && !isValidEmail(email) ? "Escribe un correo válido." : "";
  const phoneError = submitted && !isValidPhone(phone) ? "Escribe un teléfono válido." : "";
  const passwordError = submitted && password.length < 6 ? "Usa al menos 6 caracteres." : "";

  const handleRegister = () => {
    setSubmitted(true);
    if (nameError || emailError || phoneError || passwordError) return;
    navigation.replace("UserTabs", { email: email.trim(), name: name.trim() });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><Text style={styles.backText}>‹ Volver</Text></TouchableOpacity>
        <Text style={styles.eyebrow}>ÚNETE A TU COMUNIDAD</Text>
        <Text style={styles.title}>Crea tu perfil vecino</Text>
        <Text style={styles.subtitle}>Comparte tus habilidades y encuentra personas dispuestas a ayudar.</Text>
        <View style={styles.form}>
          <CustomInput error={nameError} label="Nombre" onChangeText={setName} placeholder="¿Cómo te llamas?" value={name} />
          <CustomInput error={emailError} label="Correo electrónico" onChangeText={setEmail} placeholder="tu@correo.com" type="email" value={email} />
          <CustomInput error={phoneError} label="Teléfono" onChangeText={setPhone} placeholder="+504 9999-9999" type="phone" value={phone} />
          <CustomInput error={passwordError} label="Contraseña" onChangeText={setPassword} placeholder="Mínimo 6 caracteres" type="password" value={password} />
          <CustomButton title="Crear mi cuenta" onPress={handleRegister} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#F7FBF8", flex: 1 },
  content: { padding: 26, paddingBottom: 40 },
  back: { marginBottom: 38 },
  backText: { color: "#397568", fontSize: 15, fontWeight: "700" },
  eyebrow: { color: "#4B8B7A", fontSize: 11, fontWeight: "800", letterSpacing: 1.2 },
  title: { color: "#173B35", fontSize: 30, fontWeight: "800", marginTop: 8 },
  subtitle: { color: "#6B7E77", fontSize: 15, lineHeight: 22, marginTop: 10 },
  form: { marginTop: 28 },
});
