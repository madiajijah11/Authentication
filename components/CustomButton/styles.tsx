import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
  },
  container_PRIMARY: {
    backgroundColor: "blue",
    width: "60%",
  },
  container_SECONDARY: {
    backgroundColor: "white",
    width: "100%",
  },
  text: {
    fontWeight: "normal",
    color: "white",
  },
  text_PRIMARY: {
    fontWeight: "bold",
    color: "white",
  },
  text_SECONDARY: {
    color: "black",
  },
});

export default styles;
