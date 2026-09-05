import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text  } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabsParamList } from "../navigation/TabsNavigator";
import CustomButton from "../components/CustomButton";

type NestedProps = CompositeScreenProps<
    BottomTabScreenProps<TabsParamList, 'HomeTab'>,
    NativeStackScreenProps<RootStackParamList>
    >;

export default function Home({navigation, route}: NestedProps){
    //extraccion de propiedad de parametros de ruta por medio de destructuring
    const {email} = route.params;
    return(
        <View style={styles.container}>
            <Text>Bienvenido, {email} </Text>
            <CustomButton
                title="Ir a Preferencias de Usuario"
                onPress={() => navigation.navigate("SettingsTab")}
            />
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
});