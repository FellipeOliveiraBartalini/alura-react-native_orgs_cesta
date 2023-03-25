import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
    const fontWeight = style?.fontWeight === 'bold' ? styles.textoNegrito : styles.texto;

    return <Text style={[style, fontWeight]}>
        {children}
    </Text>;
};

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: 'normal'
    }
});
