import React from 'react';
import { Helmet } from 'react-helmet';
import { Spinner, Center, Fade, Text } from '@chakra-ui/react';

import preloadImages from '../utils/preloadImages';

import Story from '../components/my-familys-barber/Story';
import TitleScreen from '../components/my-familys-barber/TitleScreen';

import { CDN_URL } from '../utils/constants';

const Header = () => (
  <Helmet>
    <title>My Family's Barber by Jean Sin | Banaag Diwa</title>
    <meta name="title" content="My Family's Barber by Jean Sin | Banaag Diwa" />
    <meta name="description" content="Jean Sin is a third-year student currently struggling her way through thesis. She calls herself a careless lover of new sights and adventure. Yet to her own dismay, she has not left her subdivision for 5 months and counting. When time is kind, she goes farming for primogems." />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://banaag-diwa.atenews.ph/my-familys-barber" />
    <meta property="og:title" content="My Family's Barber by Jean Sin | Banaag Diwa" />
    <meta property="og:description" content="Jean Sin is a third-year student currently struggling her way through thesis. She calls herself a careless lover of new sights and adventure. Yet to her own dismay, she has not left her subdivision for 5 months and counting. When time is kind, she goes farming for primogems." />
    <meta property="og:image" content={`${CDN_URL}/2021/06/bg.jpg`} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://banaag-diwa.atenews.ph/my-familys-barber" />
    <meta property="twitter:title" content="My Family's Barber by Jean Sin | Banaag Diwa" />
    <meta property="twitter:description" content="Jean Sin is a third-year student currently struggling her way through thesis. She calls herself a careless lover of new sights and adventure. Yet to her own dismay, she has not left her subdivision for 5 months and counting. When time is kind, she goes farming for primogems." />
    <meta property="twitter:image" content={`${CDN_URL}/2021/06/bg.jpg`} />
  </Helmet>
);

const MyFamilysBarber = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const isLandscape = () => window.matchMedia('(orientation:landscape)').matches;
  const [orientation, setOrientation] = React.useState(isLandscape() ? 'landscape' : 'portrait');

  React.useEffect(() => {
    const BASEURL = `${CDN_URL}/2021/06`;
    const IMAGES = [
      `${BASEURL}/1hairlong.gif`,
      `${BASEURL}/1hairlongcut.gif`,
      `${BASEURL}/2hairlong.gif`,
      `${BASEURL}/2hairlongcut.gif`,
      `${BASEURL}/3Hairlong.png`,
      `${BASEURL}/barber_bg.gif`
    ];
    Promise.all(IMAGES.map(image => preloadImages(image)))
      .then(() => setAssetsLoaded(true))
      .catch(err => console.log("Failed to load images", err))

    const onWindowResize = () => {              
      clearTimeout(window.resizeLag)
      window.resizeLag = setTimeout(() => {
        delete window.resizeLag                       
        setOrientation(isLandscape() ? 'landscape' : 'portrait')
      }, 200)
    }
    
    return (
      onWindowResize(),
      window.addEventListener('resize', onWindowResize),
      () => window.removeEventListener('resize', onWindowResize)
    );
  }, [])

  if (!assetsLoaded) {
    return (
      <>
        <Header />
        <Center w="100vw" h="100vh" bgColor="black">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </>
    )
  }

  if (orientation !== 'landscape') {
    return (
      <>
        <Header />
        <Center w="100vw" h="100vh" bgColor="black">
          <Text color="white">Switch to landscape mode to continue...</Text>
        </Center>
      </>
    )
  }

  if (!started) {
    return (
      <>
        <Header />
        <Fade in={assetsLoaded}>
          <TitleScreen onStart={() => setStarted(true)} />
        </Fade>
      </>
    );
  }

  return (
    <>
      <Header />
      <Fade in={started}>
        <Story />
      </Fade>
    </>
  );
}
export default MyFamilysBarber;