import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import HomePage from "../pages/index";
import AboutPage from "../pages/about";
import UsersPage from "../pages/users";
import UserPage from "../pages/user";

// import routes from "../routes";

const NavBar = () => {
  return (
    <Fragment>
      <h3>Default Layout works!</h3>
      <div>
        <Link to={"/"}>Home</Link>
        <span> | </span>
        <Link to={"/about"}>About</Link>
        <span> | </span>
        <Link to={"/users"}>Users</Link>
      </div>
    </Fragment>
  );
};

export default function DefaultLayout() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/users/:id" component={UserPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/about">
          <HomePage />
        </Route>
        <Route path="/">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}
