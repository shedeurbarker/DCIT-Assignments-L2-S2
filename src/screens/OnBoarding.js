import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, FlatList } from "react-native";
import slides from "../Data/slides";
import OnboarrdingItem from "./OnboarrdingItem.jsx";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OnBoarding({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF",
                paddingBottom: 20,
            }}
        >
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnboarrdingItem item={item} navigate={navigation} />}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
            ></FlatList>
            <TouchableOpacity
                style={{
                    backgroundColor: "#618985",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 5,
                }}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{ color: "white" }}>Getting Started</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 23,
        borderRadius: "50%",
        backgroundColor: "black",
    },
});
