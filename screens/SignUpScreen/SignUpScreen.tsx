import React from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import SocialSignInButtons from "../../components/SocialSignInButtons/Index";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const navigation = useNavigation();
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const pass = watch("password");

  const onPressRegister = (data: any) => {
    console.warn(data);
    navigation.navigate("ConfirmEmail");
  };

  const onPressTermsOfUse = () => {
    console.warn("Sarah clicked Terms of Use");
  };

  const onPressPrivacyPolicy = () => {
    console.warn("Sarah clicked Privacy Policy");
  };

  const onPressSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
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
        <CustomInput
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is not valid" },
          }}
        />
        <CustomInput
          name="password"
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
          name="repeat-password"
          placeholder="Repeat Password"
          control={control}
          secureTextEntry={true}
          rules={{
            validate: (value: any) => value === pass || "Password do not match",
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onPressRegister)}
          type="PRIMARY"
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onPressTermsOfUse}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPressPrivacyPolicy}>
            Privacy Policy.
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign in."
          onPress={onPressSignIn}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
