import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";

export default OnboardingItem = (props) => {
    useEffect(() => {
        // Load custom fonts
        Font.loadAsync({
            mulish: require("../../assets/fonts/sp_bold.ttf"),
        });
    }, []);

    const { width } = useWindowDimensions();

    return (
        <View style={{ flex: 1, width, alignItems: "center", justifyContent: "center" }}>
            <Image
                source={require("../../assets/oval_header.png")}
                style={[styles.backimage, width]}
            />
            <Image source={props.item.image} style={[styles.image, width]} />

            <View style={[styles.textContainer, { width }]}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.description}>{props.item.description}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        height: "30%",
        alignItems: "center",
        top: -40,
        justifyContent: "center",
        resizeMode: "contain",
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        top: 10,
        fontFamily: "serif",
    },
    backimage: {
        position: "absolute",
        top: -100,
        width: "100%",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 10,
        padding: 0.5,
        textAlign: "center",
    },
    description: {
        marginTop: 0.1,
        fontSize: 16,
        textAlign: "center",
        padding: 0.5,
    },
    button: {
        margin: 30,
        borderRadius: "50%",
        backgroundColor: "black",
    },
});
