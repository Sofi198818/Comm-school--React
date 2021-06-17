import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ROUTE_LOGIN,
  ROUTE_REGISTER,
  ROUTE_DASHBOARD,
  ROUTE_SEARCH,
  ROUTE_FAVORITES,
  ROUTE_LOGOUT,
} from "../config/routes";

function Header() {
  return (
    <header>
      <nav className="container">
        <ul>
          <li>
            <NavLink to={ROUTE_LOGIN} activeClassName="active">
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_REGISTER} activeClassName="active" exact>
              REGISTER
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_DASHBOARD} activeClassName="active">
              DASHBOARD
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_SEARCH} activeClassName="active">
              SEARCH
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_FAVORITES} activeClassName="active">
              FAVORITES
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_LOGOUT} activeClassName="active">
              LOGOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
