import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import LoginForm from "./src/screens/Login";
import SwipeableCard from "./src/screens/SwipableCard";
import OnBoarding from "./src/screens/OnBoarding";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen
                    name="Onboarding"
                    component={OnBoarding}
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: "#618985",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "QuizFlow",
                        headerStyle: {
                            backgroundColor: "#618985",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                        headerTintColor: "#FFF",
                    }}
                />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Login" component={LoginForm} />
                <Stack.Screen name="Swipe Card" component={SwipeableCard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;
