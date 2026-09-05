import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HelpRequest } from "../types";

type RequestCardProps = {
  request: HelpRequest;
  onOffer: (request: HelpRequest) => void;
};

export default function RequestCard({ request, onOffer }: RequestCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{request.category}</Text>
        </View>
        {request.urgent ? <Text style={styles.urgent}>URGENTE</Text> : null}
      </View>
      <Text style={styles.title}>{request.title}</Text>
      <Text style={styles.description}>{request.description}</Text>
      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Ionicons color="#6E827A" name="person-circle-outline" size={17} />
          <Text style={styles.metaText}>{request.author}</Text>
        </View>
        <View style={styles.metaItem}>
          <Ionicons color="#6E827A" name="location-outline" size={17} />
          <Text style={styles.metaText}>{request.distance}</Text>
        </View>
        <Text style={styles.time}>{request.time}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onOffer(request)} style={styles.offerButton}>
        <Ionicons color="#174A42" name="hand-left-outline" size={18} />
        <Text style={styles.offerText}>Ofrecer ayuda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E0EBE6",
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 14,
    padding: 17,
  },
  cardTop: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  categoryBadge: { backgroundColor: "#EAF4F0", borderRadius: 8, paddingHorizontal: 9, paddingVertical: 5 },
  categoryText: { color: "#397568", fontSize: 11, fontWeight: "700" },
  urgent: { color: "#B43F3F", fontSize: 10, fontWeight: "800" },
  title: { color: "#173B35", fontSize: 17, fontWeight: "800", marginTop: 12 },
  description: { color: "#60736D", fontSize: 13, lineHeight: 19, marginTop: 6 },
  metaRow: { alignItems: "center", flexDirection: "row", marginTop: 14 },
  metaItem: { alignItems: "center", flexDirection: "row", marginRight: 13 },
  metaText: { color: "#6E827A", fontSize: 11, marginLeft: 4 },
  time: { color: "#8B9B95", fontSize: 11, marginLeft: "auto" },
  offerButton: { alignItems: "center", borderColor: "#B8D8CD", borderRadius: 11, borderWidth: 1, flexDirection: "row", justifyContent: "center", marginTop: 15, minHeight: 40 },
  offerText: { color: "#174A42", fontSize: 13, fontWeight: "800", marginLeft: 7 },
});
