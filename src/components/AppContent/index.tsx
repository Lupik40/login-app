import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { routeLogin, routeProfile } from "../../routes/index";
import LoginPage from "../../pages/LoginPage/index";
import ProfilePage from "../../pages/ProfilePage/index";
import "./styles.scss";

const AppContent = () => {
  useAuth();

  return (
    <div className="container">
      <Switch>
        <Route exact path={routeLogin} component={LoginPage} />
        <Route exact path={routeProfile} component={ProfilePage} />
        <Redirect to={{ pathname: routeLogin }} />
      </Switch>
    </div>
  );
};

export default AppContent;
