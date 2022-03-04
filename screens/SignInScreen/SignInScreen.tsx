import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import Logo from "../../assets/images/LogoDian.png";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import SocialSignInButtons from "../../components/SocialSignInButtons/Index";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onPressSignIn = () => {
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