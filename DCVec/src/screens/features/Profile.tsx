import React from "react"
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";

export default function Profile(){

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Mi perfil</Text>
            <CustomButton title="Cerrar Sesión" onPress={() => {}} />
            <CustomButton title="Ir Atrás" onPress={() => {}} variant="secondary" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
});