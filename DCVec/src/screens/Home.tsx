import { Ionicons } from "@expo/vector-icons";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useMemo, useState } from "react";
import { Alert, FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import RequestCard from "../components/RequestCard";
import { RootStackParamList } from "../navigation/StackNavigator";
import { TabsParamList } from "../navigation/TabsNavigator";
import { HelpRequest, RequestCategory } from "../types";
import { required } from "../utils/validation";

type HomeProps = CompositeScreenProps<BottomTabScreenProps<TabsParamList, "HomeTab">, { navigation: any }>;

const initialRequests: HelpRequest[] = [
  { id: "1", title: "¿Alguien puede prestarme un taladro?", description: "Lo necesito para instalar una repisa esta tarde. Lo devuelvo hoy mismo.", category: "Herramientas", author: "María G.", distance: "0.4 km", time: "Hace 12 min" },
  { id: "2", title: "Ayuda para mover un sofá", description: "Busco una persona fuerte para moverlo de la sala al garaje. Son pocos metros.", category: "Traslados", author: "Carlos R.", distance: "0.8 km", time: "Hace 35 min", urgent: true },
  { id: "3", title: "Recomendación de electricista", description: "¿Conocen a alguien de confianza para revisar una instalación pequeña?", category: "Información", author: "Ana P.", distance: "1.1 km", time: "Hace 1 h" },
];

const categories: Array<RequestCategory | "Todas"> = ["Todas", "Herramientas", "Traslados", "Información", "Compañía"];

export default function Home({ route }: HomeProps) {
  const { name } = route.params;
  const [requests, setRequests] = useState(initialRequests);
  const [selectedCategory, setSelectedCategory] = useState<RequestCategory | "Todas">("Todas");
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [formError, setFormError] = useState("");

  const filteredRequests = useMemo(
    () => selectedCategory === "Todas" ? requests : requests.filter((request) => request.category === selectedCategory),
    [requests, selectedCategory],
  );

  const publishRequest = () => {
    const titleError = required(newTitle, "El título");
    const descriptionError = required(newDescription, "La descripción");
    if (titleError || descriptionError) {
      setFormError(titleError || descriptionError);
      return;
    }
    setRequests((current) => [{ id: Date.now().toString(), title: newTitle.trim(), description: newDescription.trim(), category: "Compañía", author: name, distance: "Tu zona", time: "Ahora" }, ...current]);
    setNewTitle("");
    setNewDescription("");
    setFormError("");
    setModalVisible(false);
  };

  const offerHelp = (request: HelpRequest) => Alert.alert("Gracias por ayudar", `Puedes contactar a ${request.author} para coordinar esta ayuda.`);

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        contentContainerStyle={styles.content}
        data={filteredRequests}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View><Text style={styles.greeting}>Hola, {name} 👋</Text><Text style={styles.headerSubtitle}>¿Qué pasa en tu comunidad?</Text></View>
              <Image source={require("../../assets/neighbors.png")} style={styles.avatar} />
            </View>
            <View style={styles.hero}>
              <View style={styles.heroCopy}><Text style={styles.heroEyebrow}>JUNTOS ES MÁS FÁCIL</Text><Text style={styles.heroTitle}>Una mano cerca puede cambiar el día.</Text><Text style={styles.heroBody}>Explora solicitudes de vecinos o publica lo que necesitas.</Text></View>
              <Ionicons color="#C3E1D7" name="people-circle-outline" size={76} />
            </View>
            <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Solicitudes cerca de ti</Text><Text style={styles.resultCount}>{filteredRequests.length} activas</Text></View>
            <FlatList data={categories} horizontal keyExtractor={(item) => item} renderItem={({ item }) => <TouchableOpacity onPress={() => setSelectedCategory(item)} style={[styles.filter, selectedCategory === item && styles.filterActive]}><Text style={[styles.filterText, selectedCategory === item && styles.filterTextActive]}>{item}</Text></TouchableOpacity>} showsHorizontalScrollIndicator={false} style={styles.filters} />
          </>
        }
        renderItem={({ item }) => <RequestCard onOffer={offerHelp} request={item} />}
        ListEmptyComponent={<Text style={styles.empty}>No hay solicitudes en esta categoría todavía.</Text>}
      />
      <TouchableOpacity activeOpacity={0.85} onPress={() => setModalVisible(true)} style={styles.floatingButton}><Ionicons color="#FFFFFF" name="add" size={25} /><Text style={styles.floatingText}>Pedir ayuda</Text></TouchableOpacity>
      <Modal animationType="slide" onRequestClose={() => setModalVisible(false)} transparent visible={modalVisible}>
        <View style={styles.modalBackdrop}><View style={styles.modalCard}><View style={styles.modalHeader}><Text style={styles.modalTitle}>Publicar solicitud</Text><TouchableOpacity onPress={() => setModalVisible(false)}><Ionicons color="#5D746C" name="close" size={24} /></TouchableOpacity></View><Text style={styles.modalSubtitle}>Cuéntale a tu comunidad qué necesitas.</Text><CustomInput error={formError} label="¿Qué necesitas?" onChangeText={setNewTitle} placeholder="Ej. Una escalera por unas horas" value={newTitle} /><CustomInput label="Detalles" onChangeText={setNewDescription} placeholder="Agrega información útil" value={newDescription} /><CustomButton title="Publicar solicitud" onPress={publishRequest} /></View></View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#F7FBF8", flex: 1 },
  content: { padding: 20, paddingBottom: 110 },
  header: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 18 },
  greeting: { color: "#173B35", fontSize: 21, fontWeight: "800" },
  headerSubtitle: { color: "#71847D", fontSize: 13, marginTop: 4 },
  avatar: { borderRadius: 21, height: 42, width: 42 },
  hero: { alignItems: "center", backgroundColor: "#174A42", borderRadius: 22, flexDirection: "row", justifyContent: "space-between", marginBottom: 25, overflow: "hidden", padding: 20 },
  heroCopy: { flex: 1, paddingRight: 8 },
  heroEyebrow: { color: "#A7D6C8", fontSize: 10, fontWeight: "800", letterSpacing: 1 },
  heroTitle: { color: "#FFFFFF", fontSize: 20, fontWeight: "800", lineHeight: 25, marginTop: 7 },
  heroBody: { color: "#D1E9E1", fontSize: 12, lineHeight: 17, marginTop: 7 },
  sectionHeader: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  sectionTitle: { color: "#173B35", fontSize: 18, fontWeight: "800" },
  resultCount: { color: "#729088", fontSize: 12 },
  filters: { marginBottom: 16, marginTop: 14 },
  filter: { backgroundColor: "#FFFFFF", borderColor: "#DDE9E3", borderRadius: 10, borderWidth: 1, marginRight: 8, paddingHorizontal: 12, paddingVertical: 8 },
  filterActive: { backgroundColor: "#DDEDE8", borderColor: "#B8D8CD" },
  filterText: { color: "#71847D", fontSize: 12, fontWeight: "600" },
  filterTextActive: { color: "#174A42" },
  empty: { color: "#71847D", paddingVertical: 30, textAlign: "center" },
  floatingButton: { alignItems: "center", backgroundColor: "#D46E4F", borderRadius: 28, bottom: 22, elevation: 5, flexDirection: "row", paddingHorizontal: 18, paddingVertical: 14, position: "absolute", right: 20, shadowColor: "#174A42", shadowOffset: { height: 3, width: 0 }, shadowOpacity: 0.2, shadowRadius: 5 },
  floatingText: { color: "#FFFFFF", fontSize: 14, fontWeight: "800", marginLeft: 6 },
  modalBackdrop: { backgroundColor: "rgba(23,59,53,0.42)", flex: 1, justifyContent: "flex-end" },
  modalCard: { backgroundColor: "#FFFFFF", borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 24 },
  modalHeader: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  modalTitle: { color: "#173B35", fontSize: 22, fontWeight: "800" },
  modalSubtitle: { color: "#71847D", fontSize: 14, marginBottom: 22, marginTop: 7 },
});
