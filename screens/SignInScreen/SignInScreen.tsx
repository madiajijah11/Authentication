import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import Logo from "../../assets/images/LogoDian.png";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignIn = () => {
    console.warn("Welcome Sarah");
  };

  const onPressForgotPassword = () => {
    console.warn("Sarah forgot password");
  };

  const onPressSignInWithFacebook = () => {
    console.warn("Sarah sign in with facebook");
  };

  const onPressSignInWithGoogle = () => {
    console.warn("Sarah sign in with google");
  };

  const onPressCreateAccount = () => {
    console.warn("Sarah create account");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}> 
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onPressSignIn} type="PRIMARY" />
        <CustomButton
          text="Forgot password?"
          onPress={onPressForgotPassword}
          type="SECONDARY"
        />
        <CustomButton
          text="Sign in with Facebook"
          onPress={onPressSignInWithFacebook}
          type="FACEBOOK"
        />
        <CustomButton
          text="Sign in with Google"
          onPress={onPressSignInWithGoogle}
          type="GOOGLE"
        />
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
