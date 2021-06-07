import React from 'react';
import { Helmet } from 'react-helmet';
import { Spinner, Center, Fade, Text } from '@chakra-ui/react';

import preloadImages from '../utils/preloadImages';
import preloadSounds from '../utils/preloadSounds';

import Story from '../components/no-notifs/Story';
import TitleScreen from '../components/no-notifs/TitleScreen';

const Header = () => (
  <Helmet>
    <title>No Notifications, No Signal, Full Battery, 10:05 PM by Harvey Spence Kentilitisca | Banaag Diwa</title>
    <meta name="title" content="No Notifications, No Signal, Full Battery, 10:05 PM by Harvey Spence Kentilitisca | Banaag Diwa" />
    <meta name="description" content="Harvey Spence Kentilitisca is a third-year psychology student at Ateneo de Davao University with no political affiliations inside and outside of the university. He was born and raised in Bukidnon where the setting and the struggles of this story were greatly inspired. He is acquainted  with campus journalism during his high school years and considers writing feature articles as his forte." />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://banaag-diwa.atenews.ph/no-notifs" />
    <meta property="og:title" content="No Notifications, No Signal, Full Battery, 10:05 PM by Harvey Spence Kentilitisca | Banaag Diwa" />
    <meta property="og:description" content="Harvey Spence Kentilitisca is a third-year psychology student at Ateneo de Davao University with no political affiliations inside and outside of the university. He was born and raised in Bukidnon where the setting and the struggles of this story were greatly inspired. He is acquainted  with campus journalism during his high school years and considers writing feature articles as his forte." />
    <meta property="og:image" content="/assets/no-notifs/scene01.jpg" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://banaag-diwa.atenews.ph/no-notifs" />
    <meta property="twitter:title" content="No Notifications, No Signal, Full Battery, 10:05 PM by Harvey Spence Kentilitisca | Banaag Diwa" />
    <meta property="twitter:description" content="Harvey Spence Kentilitisca is a third-year psychology student at Ateneo de Davao University with no political affiliations inside and outside of the university. He was born and raised in Bukidnon where the setting and the struggles of this story were greatly inspired. He is acquainted  with campus journalism during his high school years and considers writing feature articles as his forte." />
    <meta property="twitter:image" content="/assets/no-notifs/scene01.jpg" />
  </Helmet>
);

const NoNotifs = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const [loadedSfx, setLoadedSfx] = React.useState([]);

  const isLandscape = () => window.matchMedia('(orientation:landscape)').matches;
  const [orientation, setOrientation] = React.useState(isLandscape() ? 'landscape' : 'portrait');

  React.useEffect(() => {
    const BASEURL = '/assets/no-notifs';
    const IMAGES = [
      `/assets/titles/no notifs.svg`,
      `/assets/titles/low batt_edited.gif`,
      `${BASEURL}/scene01.jpg`,
      `${BASEURL}/scene02.jpg`,
      `${BASEURL}/scene03.jpg`,
      `${BASEURL}/scene04.jpg`,
      `${BASEURL}/scene05.jpg`,
      `${BASEURL}/scene06.jpg`,
      `${BASEURL}/scene07.jpg`,
      `${BASEURL}/scene08.jpg`,
      `${BASEURL}/scene09.jpg`,
      `${BASEURL}/scene10.jpg`,
      `${BASEURL}/scene11.jpg`,
      `${BASEURL}/scene12.jpg`,
      `${BASEURL}/scene13.jpg`
    ];

    const SOUNDS = [
      `${BASEURL}/sfx/scene01.mp3`,
      `${BASEURL}/sfx/scene03.mp3`,
      `${BASEURL}/sfx/scene04.mp3`,
      `${BASEURL}/sfx/scene06.mp3`,
      `${BASEURL}/sfx/scene08.mp3`,
      `${BASEURL}/sfx/scene10.mp3`,
    ];
    Promise.all([
      Promise.all([
        ...IMAGES.map(image => preloadImages(image))
      ]),
      Promise.all([
        ...SOUNDS.map(sound => preloadSounds(sound))
      ])
    ])
      .then((res) => {
        setAssetsLoaded(true);
        setLoadedSfx(res[1]);
      })
      .catch(err => console.log("Failed to load assets", err))

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
        <Story sfx={loadedSfx} />
      </Fade>
    </>
  );
}
export default NoNotifs;