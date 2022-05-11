import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { routeLogin, routeProfile } from "../../routes/index";
import getCookie from "../../services/getCookie";
import LoginPage from "../../pages/LoginPage/index";
import ProfilePage from "../../pages/ProfilePage/index";

const AppContent = () => {
  const history = useHistory();

  useEffect(() => {
    const loginCookie = getCookie("login");
    if (loginCookie !== undefined && loginCookie.length > 0) {
      history.push(routeProfile);
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path={routeLogin} component={LoginPage} />
        <Route exact path={routeProfile} component={ProfilePage} />
        <Redirect to={{ pathname: routeLogin }} />
      </Switch>
    </div>
  );
};

export default AppContent;
