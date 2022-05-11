import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { routeLogin } from "../../routes/index";
import getCookie from "../../services/getCookie";
import deleteCookie from "../../services/deleteCookie";

const ProfilePage = () => {
  const history = useHistory();

  const logoutHandler = () => {
    deleteCookie("login");
    history.push(routeLogin);
  };

  useEffect(() => {
    const loginCookie = getCookie("login");
    if (loginCookie === undefined || loginCookie.length < 1) {
      history.push(routeLogin);
    }
  }, []);

  return (
    <div>
      <h1>Your profile</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default ProfilePage;
