import React from "react";
import RegisterForm from "../../components/RegisterForm";
import "./styles.scss";

const LoginPage = () => (
  <div className="login">
    <h1 className="login__title">Login page</h1>
    <RegisterForm />
  </div>
);

export default LoginPage;
