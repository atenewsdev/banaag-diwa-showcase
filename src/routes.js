import React, { Suspense, lazy } from "react";
import {
  Route,
  useLocation
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import {
  Center,
  Spinner,
} from '@chakra-ui/react';

const Home = lazy(() => import('./pages/home'));
const MyTitaCecilia = lazy(() => import('./pages/my-tita-cecilia'));
const NoNotifs = lazy(() => import('./pages/no-notifs'));
const MyFamilysBarber = lazy(() => import('./pages/my-familys-barber'));
const Apathy = lazy(() => import('./pages/apathy'));
const RedChild = lazy(() => import('./pages/red-child'));
const TheVisitor = lazy(() => import('./pages/the-visitor'));
const Pahungaw = lazy(() => import('./pages/pahungaw'));
const Slug = lazy(() => import('./pages/[slug]'));
const Error404 = lazy(() => import('./pages/404'));

const Loading = () => (
  <Center w="100vw" h="100vh" bgColor="#233342">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
)

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
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default Routes;