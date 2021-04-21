import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Navbar';
import Home from './Home';
import App from './App';
import Quete from './Quete';

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
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
}

export default Routes;
