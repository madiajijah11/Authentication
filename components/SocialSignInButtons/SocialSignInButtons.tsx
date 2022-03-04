import * as React from "react";
import CustomButton from "../CustomButton/Index";

const SocialSignInButtons = () => {
  const onPressSignInWithFacebook = () => {
    console.warn("Sarah sign in with facebook");
  };

  const onPressSignInWithGoogle = () => {
    console.warn("Sarah sign in with google");
  };

  return (
    <>
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
    </>
  );
};

export default SocialSignInButtons;
