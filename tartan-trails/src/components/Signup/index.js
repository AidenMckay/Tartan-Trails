import React from 'react';
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

export const Signup = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Tartan-Trails</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign up for a new account</FormH1>
              <FormLabel htmlFor='for'>Username</FormLabel>
              <FormInput type='text' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
