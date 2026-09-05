import { TouchableOpacity, Text, StyleSheet } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "tertiary";
};

export default function CustomButton({ title, onPress, variant = "primary" }: CustomButtonProps) {
    const styles = getStyles(variant);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </ TouchableOpacity>
    );
}

const getStyles = (variant: "primary" | "secondary" | "tertiary") =>
    StyleSheet.create({
        button: {
            backgroundColor:
                variant === "primary"
                    ? "navy"
                    : variant === "secondary"
                    ? "lightblue"
                    : "#fff",
            borderRadius: 5,
            width: 150,
        },
        text: {
            color: variant === "tertiary" ? "black" : "white",
            textAlign: "center",
            paddingVertical: 10,
        },
    });
