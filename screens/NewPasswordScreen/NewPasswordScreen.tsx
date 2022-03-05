import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();

  const pass = watch("new-password");

  const onPressSubmit = (data: any) => {
    console.warn(data);
    navigation.navigate("Home");
  };

  const onPressSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
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
        <CustomInput
          name="new-password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be more than 8 character",
            },
            maxLength: {
              value: 20,
              message: "Password should be less than 20 character",
            },
          }}
        />
        <CustomInput
          name="new-repeat-password"
          placeholder="Repeat Password"
          control={control}
          secureTextEntry={true}
          rules={{
            validate: (value: any) => value === pass || "Password do not match",
          }}
        />
        <CustomButton
          text="Submit"
          onPress={handleSubmit(onPressSubmit)}
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

export default NewPasswordScreen;