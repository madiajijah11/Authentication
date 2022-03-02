import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 300,
        height: Dimensions.get("window").height / 2,
    }
});

export default styles;