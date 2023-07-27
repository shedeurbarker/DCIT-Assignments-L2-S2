import React, { useRef } from "react";
import { View, Text, StyleSheet, PanResponder, Animated } from "react-native";
const SwipeableCard = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                { dx: pan.x }, // dx represents the horizontal movement of the card
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dx > 120) {
                // Swipe right to dismiss
                Animated.timing(pan, {
                    toValue: { x: 400, y: 0 }, // Move the card to the right (off the screen)
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            } else if (gesture.dx < -120) {
                // Swipe left to dismiss
                Animated.timing(pan, {
                    toValue: { x: -400, y: 0 }, // Moving the card to the left (off the screen)
                    duration: 300,
                    useNativeDriver: false,
                }).start();
            } else {
                // Reset the card position
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    friction: 4,
                    useNativeDriver: false,
                }).start();
            }
        },
    });
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.card, { transform: [{ translateX: pan.x }] }]}
                {...panResponder.panHandlers}
            >
                <Text style={styles.cardText}>Swipe Me!</Text>
            </Animated.View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: "#3498db",
        width: 300,
        height: 200,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    cardText: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
});
export default SwipeableCard;
