import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput/Index";
import CustomButton from "../../components/CustomButton/Index";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigation = useNavigation();

  const onPressSubmit = () => {
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
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter new password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat new password"
          value={repeatPassword}
          setValue={setRepeatPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Submit" onPress={onPressSubmit} type="PRIMARY" />
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
