import React from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Details Screen</Text>
            <Button title="Go back to Home" onPress={() => navigation.goBack()} />
            <Text>Cards</Text>
            <Button title="Card Swipe Example" onPress={() => navigation.navigate("Swipe Card")} />
            <StatusBar style="auto" />
        </View>
    );
};
export default DetailsScreen;
