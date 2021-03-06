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

// import routes from "../routes";

const NavBar = () => {

  return (
    <Fragment>
      <Link to={"/"}>Home</Link>
      <span> | </span>
      <Link to={"/about"}>About</Link>
    </Fragment>
  );
};

export default function DefaultLayout() {
  /*
  const navBox = routes.map(({ path, component }, index) => (
    <Route key={index} exact path={path} component={component} />
  ));

  return (
    <Router>
      <h3>Default Layout works!</h3>
      <Link to={"/"}>Home</Link>
      <span> | </span>
      <Link to={"/about"}>About</Link>
      {navBox}
    </Router>
    );
    */

  return (
    <Router>
      <h3>Default Layout works!</h3>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}
