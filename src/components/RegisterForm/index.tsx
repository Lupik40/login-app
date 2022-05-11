import React, { useState } from "react";
import { useHistory } from "react-router";
import { routeProfile } from "../../routes";
import setCookie from "../../services/setCookie";

const RegisterForm = () => {
  const history = useHistory();

  const [inpLogValue, setInpLogValue] = useState("");
  const [inpPassValue, setInpPassValue] = useState("");
  const [isInpLogError, setIsInpLogError] = useState(false);
  const [isInpPassError, setIsInpPassError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !isInpLogError &&
      !isInpPassError &&
      inpPassValue.length > 0 &&
      inpLogValue.length > 0
    ) {
      setCookie("login", "true");
      history.push(routeProfile);
    }
  };

  const handleChangeLog = (e: any) => {
    setInpLogValue(e.target.value);
    if (e.target.value.length > 4) {
      setIsInpLogError(false);
    } else {
      setIsInpLogError(true);
    }
  };

  const handleChangePass = (e: any) => {
    setInpPassValue(e.target.value);
    if (e.target.value.length >= 8) {
      setIsInpPassError(false);
    } else {
      setIsInpPassError(true);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={inpLogValue}
        onChange={(e) => handleChangeLog(e)}
        placeholder="login"
      />
      {isInpLogError ? <p>Invalid input data</p> : ""}
      <input
        type="password"
        value={inpPassValue}
        onChange={(e) => handleChangePass(e)}
        placeholder="password"
      />
      {isInpPassError ? <p>Invalid input data</p> : ""}
      <button type="submit">Send form</button>
    </form>
  );
};

export default RegisterForm;
