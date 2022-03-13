import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./styles";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  keyboardType,
  rules = {},
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }: any) => (
        <>
          <View
            style={[styles.container, { borderColor: error ? "red" : "#fff" }]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder={placeholder}
              onBlur={onBlur}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              keyboardType={keyboardType}
            />
          </View>
          {error && (
            <Text style={styles.error}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
