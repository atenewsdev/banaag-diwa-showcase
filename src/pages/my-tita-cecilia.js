import React from 'react';
import { Helmet } from 'react-helmet';
import { Spinner, Center, Fade, Text } from '@chakra-ui/react';

import preloadImages from '../utils/preloadImages';

import Story from '../components/my-tita-cecilia/Story';
import TitleScreen from '../components/my-tita-cecilia/TitleScreen';

import { CDN_URL } from '../utils/constants';

const Header = () => (
  <Helmet>
    <title>My Tita Cecilia by Chaz Oyao | Banaag Diwa</title>
    <meta name="title" content="My Tita Cecilia by Chaz Oyao | Banaag Diwa" />
    <meta name="description" content="Chaz Oyao is a 1st year AB Economics student at Ateneo de Davao University. A member of the Dadiangas  Writers Association in Gensan, he has organized creative writing workshops back in his high school days.  He is currently the Associate Editor of The Dragon Post: The Official Newsletter of the Social Sciences Cluster." />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://banaag-diwa.atenews.ph/my-tita-cecilia" />
    <meta property="og:title" content="My Tita Cecilia by Chaz Oyao | Banaag Diwa" />
    <meta property="og:description" content="Chaz Oyao is a 1st year AB Economics student at Ateneo de Davao University. A member of the Dadiangas  Writers Association in Gensan, he has organized creative writing workshops back in his high school days.  He is currently the Associate Editor of The Dragon Post: The Official Newsletter of the Social Sciences Cluster." />
    <meta property="og:image" content={`${CDN_URL}/2021/06/bg.jpg`} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://banaag-diwa.atenews.ph/my-tita-cecilia" />
    <meta property="twitter:title" content="My Tita Cecilia by Chaz Oyao | Banaag Diwa" />
    <meta property="twitter:description" content="Chaz Oyao is a 1st year AB Economics student at Ateneo de Davao University. A member of the Dadiangas  Writers Association in Gensan, he has organized creative writing workshops back in his high school days.  He is currently the Associate Editor of The Dragon Post: The Official Newsletter of the Social Sciences Cluster." />
    <meta property="twitter:image" content={`${CDN_URL}/2021/06/bg.jpg`} />
  </Helmet>
);

const MyTitaCecilia = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const isLandscape = () => window.matchMedia('(orientation:landscape)').matches;
  const [orientation, setOrientation] = React.useState(isLandscape() ? 'landscape' : 'portrait');

  React.useEffect(() => {
    const BASEURL = `${CDN_URL}/2021/06`;
    const IMAGES = [
      `${BASEURL}/my-tita-cecilia.png`,
      `${BASEURL}/bg_night.jpg`,
      `${BASEURL}/bg.jpg`,
      `${BASEURL}/elem_1.png`,
      `${BASEURL}/elem_2.png`,
      `${BASEURL}/elem_3.png`,
      `${BASEURL}/elem_4.png`,
      `${BASEURL}/elem_5.png`,
      `${BASEURL}/elem_6.png`,
      `${BASEURL}/elem_7_night.png`,
      `${BASEURL}/elem_7.png`,
      `${BASEURL}/elem_8_night.png`,
      `${BASEURL}/elem_8.png`,
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
export default MyTitaCecilia;