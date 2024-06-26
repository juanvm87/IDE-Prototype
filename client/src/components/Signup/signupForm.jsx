import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const handleSignin = () => {
    window.location.href = "/home";
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full name" />
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Profession" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handleSignin} type="submit">
        Sign up
      </SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Sign in
        </BoldLink>
      </LineText>
      <LineText>
        Create Semaphore{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Email
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
