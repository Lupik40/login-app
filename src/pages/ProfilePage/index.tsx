import React from "react";
import { useHistory } from "react-router";
import { routeLogin } from "../../routes/index";
import deleteCookie from "../../services/deleteCookie";
import "./styles.scss";

const ProfilePage = () => {
  const history = useHistory();

  const logoutHandler = () => {
    deleteCookie("token");
    history.push(routeLogin);
  };

  return (
    <div className="profile">
      <h1 className="profile__title">Your profile</h1>
      <p className="profile__text">You went to the personal account</p>
      <button className="profile__btn" type="button" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
