import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import ScrollToTop from './utils/ScrollToTop';

import Home from './pages/home';
import MyTitaCecilia from "./pages/my-tita-cecilia";
import NoNotifs from './pages/no-notifs';
import Apathy from './pages/apathy';
import RedChild from './pages/red-child';
import TheVisitor from './pages/the-visitor';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/apathy">
          <Apathy />
        </Route>
        <Route path="/red-child">
          <RedChild />
        </Route>
        <Route path="/the-visitor">
          <TheVisitor />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;