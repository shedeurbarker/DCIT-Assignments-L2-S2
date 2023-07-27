import React, { useState } from "react";
import { View, Text, Button } from "react-native";
const ApiCall = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // method for making api call
    const fetchData = async () => {
        try {
            const response = await fetch("https://api.example.com/data");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const jsonData = await response.json();
            setData(jsonData);
            setError(null);
        } catch (error) {
            setError("Error fetching data: " + error.message);
            setData(null);
        }
    };
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {data ? (
                <View>
                    <Text>Data received from API:</Text>
                    <Text>{JSON.stringify(data)}</Text>
                </View>
            ) : (
                <Text>No data received yet.</Text>
            )}
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            <Button title="Fetch Data from API" onPress={fetchData} />
        </View>
    );
};
export default ApiCall;
