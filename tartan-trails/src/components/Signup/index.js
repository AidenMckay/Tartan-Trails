import React, { useState } from 'react';
import UserService from '../../services/UserService';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from './SignupElements';
import { useHistory } from "react-router-dom"

export const Signup = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const history = useHistory()

  const signUp = (evt) => {
    evt.preventDefault()
    if (password !== confirmPassword) {
      alert("Please ensure your passwords match.")
      return;
    }
    UserService.signUp(username, password)
      .then(res => {
        alert("Sign up successful.")
        UserService.signIn(username, password)
          .then(res => {
            localStorage.setItem("auth", JSON.stringify(res))
            history.push("/gnomes")
          })
      })
      .catch(err => {
        alert(err.message)
      })
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Tartan-Trails</Icon>
          <FormContent>
            <Form action='#' onSubmit={signUp}>
              <FormH1>Sign up for a new account</FormH1>
              <FormLabel htmlFor='for'>Username</FormLabel>
              <FormInput onInput={(evt) => setUsername(evt.target.value)} type='text' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput onInput={(evt) => setPassword(evt.target.value)} type='password' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput onInput={(evt) => setConfirmPassword(evt.target.value)} type='password' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
