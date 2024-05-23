// src/Login.js

import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  text-align: right;
  margin-top: 1rem;
  display: block;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <LoginContainer>
      <LoginBox>
        <h2>{isLoginForm ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={handlePasswordChange}
              required
            />
          </FormGroup>
          {!isLoginForm && ( // 회원가입 폼일 경우에만 보여지도록
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
              />
            </FormGroup>
          )}
          <Button type="submit">{isLoginForm ? "Login" : "Sign Up"}</Button>
          <ToggleButton className="toggleBtn" onClick={handleToggleForm}>
            {isLoginForm ? "회원가입" : "로그인"}
          </ToggleButton>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
