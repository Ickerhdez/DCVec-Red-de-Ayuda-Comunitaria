import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { LoginScreenProps } from "../navigation/StackNavigator";
import { isValidEmail } from "../utils/validation";

export default function Login({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailError = submitted && !isValidEmail(email) ? "Escribe un correo válido." : "";
  const passwordError = submitted && password.length < 6 ? "Usa al menos 6 caracteres." : "";

  const handleLogin = () => {
    setSubmitted(true);
    if (emailError || passwordError) return;
    navigation.replace("UserTabs", { email: email.trim(), name: email.split("@")[0] || "Vecino" });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.brandRow}>
          <View style={styles.brandIcon}><Ionicons color="#FFFFFF" name="people" size={23} /></View>
          <Text style={styles.brand}>DCVec</Text>
        </View>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
        <Text style={styles.eyebrow}>RED DE AYUDA COMUNITARIA</Text>
        <Text style={styles.title}>Ayudarnos nos acerca.</Text>
        <Text style={styles.subtitle}>Encuentra apoyo en tu comunidad y comparte lo que sabes hacer.</Text>
        <View style={styles.form}>
          <CustomInput error={emailError} label="Correo electrónico" onChangeText={setEmail} placeholder="tu@correo.com" type="email" value={email} />
          <CustomInput error={passwordError} label="Contraseña" onChangeText={setPassword} placeholder="Mínimo 6 caracteres" type="password" value={password} />
          <CustomButton title="Entrar a mi comunidad" onPress={handleLogin} />
          <View style={styles.divider}><View style={styles.line} /><Text style={styles.dividerText}>o</Text><View style={styles.line} /></View>
          <CustomButton title="Crear una cuenta" onPress={() => navigation.navigate("RegisterScreen")} variant="secondary" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#F7FBF8", flex: 1 },
  content: { padding: 26, paddingBottom: 40 },
  brandRow: { alignItems: "center", flexDirection: "row", marginBottom: 26 },
  brandIcon: { alignItems: "center", backgroundColor: "#174A42", borderRadius: 12, height: 42, justifyContent: "center", width: 42 },
  brand: { color: "#174A42", fontSize: 23, fontWeight: "800", marginLeft: 10 },
  image: { alignSelf: "center", borderRadius: 54, height: 108, marginBottom: 24, width: 108 },
  eyebrow: { color: "#4B8B7A", fontSize: 11, fontWeight: "800", letterSpacing: 1.2 },
  title: { color: "#173B35", fontSize: 31, fontWeight: "800", lineHeight: 37, marginTop: 7 },
  subtitle: { color: "#6B7E77", fontSize: 15, lineHeight: 22, marginTop: 10 },
  form: { marginTop: 28 },
  divider: { alignItems: "center", flexDirection: "row", marginVertical: 18 },
  line: { backgroundColor: "#DDE9E3", flex: 1, height: 1 },
  dividerText: { color: "#8C9C96", fontSize: 12, marginHorizontal: 12 },
});
