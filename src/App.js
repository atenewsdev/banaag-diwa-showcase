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
import MyFamilysBarber from "./pages/my-familys-barber";
import Apathy from './pages/apathy';
import RedChild from './pages/red-child';
import TheVisitor from './pages/the-visitor';
import Pahungaw from './pages/pahungaw';
import Slug from './pages/[slug]';
import Error404 from './pages/404';

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
        <Route exact path="/my-tita-cecilia">
          <MyTitaCecilia />
        </Route>
        <Route exact path="/no-notifs">
          <NoNotifs />
        </Route>
        <Route exact path="/my-familys-barber">
          <MyFamilysBarber />
        </Route>
        <Route exact path="/apathy">
          <Apathy />
        </Route>
        <Route exact path="/red-child">
          <RedChild />
        </Route>
        <Route exact path="/the-visitor">
          <TheVisitor />
        </Route>
        <Route exact path="/pahungaw">
          <Pahungaw />
        </Route>
        <Route exact path="/:type/:slug">
          <Slug />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;