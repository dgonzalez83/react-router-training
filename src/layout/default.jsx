import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import routes from "../routes";

const DefaultLayout = () => {
  const navBox = routes.map(({ path, component }, index) => (
    <Route key={index} exact path={path} component={component} />
  ));

  return (
    <Fragment>
      <h3>Default Layout works!</h3>
      <Link to={"/"}>Home</Link>
      <span> | </span>
      <Link to={"/about"}>About</Link>
      {navBox}
    </Fragment>
  );
};

export default DefaultLayout;
