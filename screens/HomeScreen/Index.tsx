import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/CustomButton/Index";

const HomeScreen = () => {

   const navigation = useNavigation();
   const SignOut = () => {
     navigation.navigate("SignIn");
   };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <CustomButton text="Sign Out" onPress={SignOut} type="PRIMARY" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
