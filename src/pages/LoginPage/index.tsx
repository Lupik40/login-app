import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { routeProfile } from "../../routes";
import getCookie from "../../services/getCookie";
import RegisterForm from "../../components/RegisterForm";

const LoginPage = () => {
  const history = useHistory();

  useEffect(() => {
    const loginCookie = getCookie("login");
    if (loginCookie !== undefined && loginCookie.length > 0) {
      history.push(routeProfile);
    }
  }, []);

  return (
    <div>
      <h1>Login page</h1>
      <RegisterForm />
    </div>
  );
};

export default LoginPage;
