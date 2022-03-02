import React, { useState } from "react";
import { View, Image, useWindowDimensions } from "react-native";
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

  return (
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
    </View>
  );
};

export default SignInScreen;
