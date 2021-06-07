import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Home from './pages/home';
import MyTitaCecilia from "./pages/my-tita-cecilia";
import NoNotifs from './pages/no-notifs';

const App = () => {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route path="/my-tita-cecilia">
          <MyTitaCecilia />
        </Route>
        <Route path="/no-notifs">
          <NoNotifs />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;