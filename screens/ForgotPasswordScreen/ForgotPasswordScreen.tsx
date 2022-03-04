import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const onPressSend = () => {
    navigation.navigate("NewPassword");
  };

  const onPressSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" onPress={onPressSend} type="PRIMARY" />
        <CustomButton
          text="Back to Sign in."
          onPress={onPressSignIn}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;