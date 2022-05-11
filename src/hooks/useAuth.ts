import { useEffect } from "react";
import { useHistory } from "react-router";
import { routeLogin, routeProfile } from "../routes/index";
import getCookie from "../services/getCookie";

export default function useAuth() {
  const history = useHistory();

  const hasAccess = (token: string | undefined) => {
    return token && token !== undefined;
  };

  const requestLoginPageWithToken = (token: string | undefined) => {
    return token && history.location.pathname === "/login";
  };

  const redirect = (route: string) => {
    history.push(route);
  };

  useEffect(() => {
    const token = getCookie("token");
    if (!hasAccess(token)) {
      redirect(routeLogin);
    } else if (requestLoginPageWithToken(token)) {
      redirect(routeProfile);
    }
  }, [history.location.pathname]);
}
