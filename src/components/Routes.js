import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";

import NavBar from  "./Navbar";
import Quete from "./Quete";

const Routes = () => {
  return (
    <BrowserRouter>
     <NavBar/>
      <Switch>
      <Route path="/" component={Home}  exact/>
        <Route path="/calculator" component={App} />
        <Route path="/quete" component={Quete} />
      </Switch>
      <footer>
  <div>
      <p>
          Developed by Mir Rawshan Ali
      </p>
  </div>
    </footer>
    </BrowserRouter>
  );
};

export default Routes;