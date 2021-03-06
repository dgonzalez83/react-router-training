import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DefaultLayout from "./layout/default";
import routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout routes={routes} />
    </BrowserRouter>
  );
}

export default App;
