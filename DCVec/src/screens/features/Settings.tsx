import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [nearbyOnly, setNearbyOnly] = useState(true);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>TU EXPERIENCIA</Text>
        <Text style={styles.title}>Preferencias</Text>
        <Text style={styles.subtitle}>Decide cómo quieres participar en DCVec.</Text>
        <View style={styles.group}>
          <Text style={styles.groupTitle}>Notificaciones</Text>
          <View style={styles.settingRow}><View style={styles.settingCopy}><Ionicons color="#397568" name="notifications-outline" size={21} /><View><Text style={styles.settingTitle}>Avisos de la comunidad</Text><Text style={styles.settingDescription}>Recibe novedades sobre tus solicitudes.</Text></View></View><Switch onValueChange={setNotifications} thumbColor="#FFFFFF" trackColor={{ false: "#D4E1DB", true: "#70A99A" }} value={notifications} /></View>
          <View style={styles.divider} />
          <View style={styles.settingRow}><View style={styles.settingCopy}><Ionicons color="#397568" name="location-outline" size={21} /><View><Text style={styles.settingTitle}>Solo cerca de mí</Text><Text style={styles.settingDescription}>Prioriza solicitudes de tu zona.</Text></View></View><Switch onValueChange={setNearbyOnly} thumbColor="#FFFFFF" trackColor={{ false: "#D4E1DB", true: "#70A99A" }} value={nearbyOnly} /></View>
        </View>
        <TouchableOpacity style={styles.linkRow}><Text style={styles.linkText}>Centro de ayuda</Text><Ionicons color="#6F837B" name="chevron-forward" size={19} /></TouchableOpacity>
        <TouchableOpacity style={styles.linkRow}><Text style={styles.linkText}>Privacidad y seguridad</Text><Ionicons color="#6F837B" name="chevron-forward" size={19} /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#F7FBF8", flex: 1 },
  content: { padding: 22 },
  eyebrow: { color: "#4B8B7A", fontSize: 11, fontWeight: "800", letterSpacing: 1.1 },
  title: { color: "#173B35", fontSize: 28, fontWeight: "800", marginTop: 7 },
  subtitle: { color: "#71847D", fontSize: 14, marginTop: 7 },
  group: { backgroundColor: "#FFFFFF", borderColor: "#E0EBE6", borderRadius: 18, borderWidth: 1, marginTop: 25, padding: 17 },
  groupTitle: { color: "#173B35", fontSize: 15, fontWeight: "800", marginBottom: 15 },
  settingRow: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  settingCopy: { alignItems: "center", flex: 1, flexDirection: "row" },
  settingTitle: { color: "#2A4A43", fontSize: 13, fontWeight: "700", marginLeft: 11 },
  settingDescription: { color: "#81918B", fontSize: 11, marginLeft: 11, marginTop: 3 },
  divider: { backgroundColor: "#E7F0EB", height: 1, marginVertical: 16 },
  linkRow: { alignItems: "center", borderBottomColor: "#E0EBE6", borderBottomWidth: 1, flexDirection: "row", justifyContent: "space-between", paddingVertical: 18 },
  linkText: { color: "#2A4A43", fontSize: 14, fontWeight: "600" },
});
