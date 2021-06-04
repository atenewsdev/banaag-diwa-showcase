import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home';
import MyTitaCecilia from "./pages/my-tita-cecilia";
import NoNotifs from './pages/no-notifs';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/my-tita-cecilia">
          <MyTitaCecilia />
        </Route>
        <Route path="/no-notifs">
          <NoNotifs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;