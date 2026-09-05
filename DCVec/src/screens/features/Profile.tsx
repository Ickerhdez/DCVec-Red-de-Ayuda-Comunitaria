import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

export default function Profile() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>MI COMUNIDAD</Text>
        <Text style={styles.title}>Tu perfil vecino</Text>
        <View style={styles.profileCard}>
          <Image source={require("../../../assets/icon.png")} style={styles.avatar} />
          <Text style={styles.name}>María González</Text>
          <Text style={styles.location}><Ionicons color="#668079" name="location-outline" size={15} /> Colonia Las Flores</Text>
          <View style={styles.stats}><View style={styles.stat}><Text style={styles.statNumber}>12</Text><Text style={styles.statLabel}>Ayudas dadas</Text></View><View style={styles.stat}><Text style={styles.statNumber}>4.9</Text><Text style={styles.statLabel}>Valoración</Text></View><View style={styles.stat}><Text style={styles.statNumber}>8</Text><Text style={styles.statLabel}>Ayudas recibidas</Text></View></View>
        </View>
        <Text style={styles.sectionTitle}>Sobre ti</Text>
        <View style={styles.infoRow}><Ionicons color="#397568" name="sparkles-outline" size={20} /><Text style={styles.infoText}>Me gusta ayudar con reparaciones y compartir herramientas.</Text></View>
        <CustomButton title="Editar perfil" onPress={() => {}} variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#F7FBF8", flex: 1 },
  content: { padding: 22 },
  eyebrow: { color: "#4B8B7A", fontSize: 11, fontWeight: "800", letterSpacing: 1.1 },
  title: { color: "#173B35", fontSize: 28, fontWeight: "800", marginTop: 7 },
  profileCard: { alignItems: "center", backgroundColor: "#FFFFFF", borderColor: "#E0EBE6", borderRadius: 20, borderWidth: 1, marginTop: 22, padding: 22 },
  avatar: { borderRadius: 38, height: 76, width: 76 },
  name: { color: "#173B35", fontSize: 20, fontWeight: "800", marginTop: 12 },
  location: { color: "#668079", fontSize: 13, marginTop: 5 },
  stats: { borderTopColor: "#E7F0EB", borderTopWidth: 1, flexDirection: "row", justifyContent: "space-around", marginTop: 20, paddingTop: 17, width: "100%" },
  stat: { alignItems: "center", flex: 1 },
  statNumber: { color: "#174A42", fontSize: 19, fontWeight: "800" },
  statLabel: { color: "#7A8C85", fontSize: 10, marginTop: 4, textAlign: "center" },
  sectionTitle: { color: "#173B35", fontSize: 18, fontWeight: "800", marginBottom: 13, marginTop: 28 },
  infoRow: { alignItems: "flex-start", backgroundColor: "#EAF4F0", borderRadius: 14, flexDirection: "row", padding: 15 },
  infoText: { color: "#397568", flex: 1, fontSize: 13, lineHeight: 19, marginLeft: 10 },
});
