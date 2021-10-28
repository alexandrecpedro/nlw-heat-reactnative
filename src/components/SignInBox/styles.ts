import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        // getBottomSpace() = give the right distance from bottom for all mobile types (ex: iPhone)
        paddingBottom: getBottomSpace() + 32
    }
});