import React from "react";
import {
  Route,
  useLocation
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

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

const Routes = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      console.log(hash);
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        console.log(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash]);

  return (
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
  );
}

export default Routes;