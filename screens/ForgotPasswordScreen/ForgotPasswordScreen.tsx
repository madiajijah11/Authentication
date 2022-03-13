import React from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onPressSend = (data: any) => {
    console.warn(data);
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
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: {
              value: 5,
              message: "Username should be more than 4 character",
            },
            maxLength: {
              value: 20,
              message: "Username should be less than 20 character",
            },
          }}
        />
        <CustomButton
          text="Send"
          onPress={handleSubmit(onPressSend)}
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

export default ForgotPasswordScreen;