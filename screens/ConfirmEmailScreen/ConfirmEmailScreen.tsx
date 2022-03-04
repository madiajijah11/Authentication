import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onPressRegister = () => {
    navigation.navigate("Home");
  };

  const onPressResendCode = () => {
    console.warn("Sarah clicked Resend Code");
  };

  const onPressSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton
          text="Register"
          onPress={onPressRegister}
          type="PRIMARY"
        />
        <CustomButton
          text="Resend code"
          onPress={onPressResendCode}
          type="PRIMARY"
        />
        <CustomButton
          text="Back to Sign in."
          onPress={onPressSignIn}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
