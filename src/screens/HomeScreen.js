import React from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";


const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home Screen</Text>
            <Button title="Details" onPress={() => navigation.navigate("Details")} />

            <Text>Login</Text>
            <Button title="Login" onPress={() => navigation.navigate("Login")} />
            <StatusBar style="auto" />
        </View>
    );
};
export default HomeScreen;
