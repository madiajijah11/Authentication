import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onPressRegister = (data: any) => {
    console.warn(data);
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
          name="code"
          placeholder="Code"
          control={control}
          rules={{
            required: "Code is required",
            minLength: {
              value: 1,
              message: "Code should be more than 1 character",
            },
            maxLength: {
              value: 6,
              message: "Code should be less than 7 character",
            },
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onPressRegister)}
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
