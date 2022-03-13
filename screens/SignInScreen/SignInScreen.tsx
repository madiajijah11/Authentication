import React from "react";
import { View, Image, ScrollView } from "react-native";
import Logo from "../../assets/images/LogoDian.png";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import SocialSignInButtons from "../../components/SocialSignInButtons/Index";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onPressSignIn = (data: any) => {
    console.warn(data);
    navigation.navigate("Home");
  };

  const onPressForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const onPressCreateAccount = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
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
        <CustomButton
          text="Sign In"
          onPress={handleSubmit(onPressSignIn)}
          type="PRIMARY"
        />
        <CustomButton
          text="Forgot password?"
          onPress={onPressForgotPassword}
          type="SECONDARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create new one."
          onPress={onPressCreateAccount}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;