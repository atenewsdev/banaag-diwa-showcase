import React from 'react';

import { Spinner, Center, Fade } from '@chakra-ui/react';

import preloadImages from '../utils/preloadImages';
import preloadSounds from '../utils/preloadSounds';

import Story from '../components/no-notifs/Story';
import TitleScreen from '../components/no-notifs/TitleScreen';

const NoNotifs = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const [loadedSfx, setLoadedSfx] = React.useState([]);

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
  }, [])

  if (!assetsLoaded) {
    return (
      <Center w="100vw" h="100vh" bgColor="black">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    )
  }

  if (!started) {
    return (
      <Fade in={assetsLoaded}>
        <TitleScreen onStart={() => setStarted(true)} />
      </Fade>
    );
  }

  return (
    <Fade in={started}>
      <Story sfx={loadedSfx} />
    </Fade>
  );
}
export default NoNotifs;