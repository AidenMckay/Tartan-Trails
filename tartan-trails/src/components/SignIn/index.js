import React, { useState } from 'react';
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
} from './SigninElements';
import UserService from '../../services/UserService'
import { useHistory } from "react-router-dom"

export const SignIn = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const signIn = (evt) => {
    evt.preventDefault()
    UserService.signIn(username, password)
      .then(res => {
        localStorage.setItem("auth", JSON.stringify(res))
        history.push("/gnomes")
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
            <Form onSubmit={signIn}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor='for'>Username</FormLabel>
              <FormInput onInput={(evt) => setUsername(evt.target.value)} type='text' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput onInput={(evt) => setPassword(evt.target.value)} type='password' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
