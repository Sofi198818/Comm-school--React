import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_DASHBOARD,
  ROUTE_REGISTER,
  ROUTE_SEARCH,
  ROUTE_FAVORITES,
} from "./config/routes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import User from "./pages/User";
import Favorites from "./pages/Favorites";

function Routes() {
  return (
    <Switch>
      <Route path={ROUTE_LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTE_DASHBOARD}>
        <About />
      </Route>
      <Route path={ROUTE_SEARCH}>
        <Contact />
      </Route>
      <Route path={ROUTE_CHARACTER}>
        <CharacterInfo />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
