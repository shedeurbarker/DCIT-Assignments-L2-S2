import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        Alert.alert("Login Details", `Email: ${email}\nPassword: ${password}`);
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TextInput
                style={{
                    width: "80%",
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                    paddingHorizontal: 10,
                }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={{
                    width: "80%",
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 20,
                    paddingHorizontal: 10,
                }}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "#515151",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                }}
                onPress={handleLogin}
            >
                <Text style={{ color: "white" }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};
export default LoginForm;
