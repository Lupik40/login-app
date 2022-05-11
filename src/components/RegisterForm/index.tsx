import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { routeProfile } from "../../routes";
import setCookie from "../../services/setCookie";
import "./styles.scss";

const RegisterForm = () => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !loginError &&
      !passwordError &&
      login.length > 0 &&
      password.length > 0
    ) {
      setCookie("token", Date.now.toString());
      history.push(routeProfile);
    }
  };

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    if (e.target.value.length > 4) {
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
      <div className="login__wrapper">
        <input
          className="login__input"
          type="text"
          value={login}
          onChange={(e) => handleChangeLogin(e)}
          placeholder="login"
        />
        {loginError ? (
          <span className="login__error">Invalid input data</span>
        ) : (
          ""
        )}
      </div>
      <div className="login__wrapper">
        <input
          className="login__input"
          type="password"
          value={password}
          onChange={(e) => handleChangePassword(e)}
          placeholder="password"
        />
        {passwordError ? (
          <span className="login__error">Invalid input data</span>
        ) : (
          ""
        )}
      </div>
      <button type="submit" className="login__btn">
        Send form
      </button>
    </form>
  );
};

export default RegisterForm;
