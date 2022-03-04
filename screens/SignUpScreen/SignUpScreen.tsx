import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import SocialSignInButtons from "../../components/SocialSignInButtons/Index";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigation = useNavigation();

  const onPressRegister = () => {
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat password"
          value={repeatPassword}
          setValue={setRepeatPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={onPressRegister}
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
