import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ROUTE_LOGIN,
  ROUTE_DASHBOARD,
  ROUTE_SEARCH,
  ROUTE_FAVORITES,
  ROUTE_REGISTER,
  ROUTE_LOGOUT,
} from "./config/routes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Logout from "./pages/Logout";

function Routes() {
  return (
    <Switch>
      <Route path={ROUTE_LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTE_REGISTER} exact>
        <Register />
      </Route>
      <Route path={ROUTE_DASHBOARD}>
        <Dashboard />
      </Route>
      <Route path={ROUTE_SEARCH}>
        <Search />
      </Route>
      <Route path={ROUTE_FAVORITES}>
        <Favorites />
      </Route>
      <Route path={ROUTE_LOGOUT}>
        <Logout />
      </Route>
    </Switch>
  );
}

export default Routes;
