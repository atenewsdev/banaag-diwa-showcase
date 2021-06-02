import React from 'react';

import { Spinner, Center } from '@chakra-ui/react';

import preloadImages from '../utils/preloadImages';

import Story from '../components/my-tita-cecilia/Story';
import TitleScreen from '../components/my-tita-cecilia/TitleScreen';

const MyTitaCecilia = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const BASEURL = '/assets/my-tita-cecilia';
    const IMAGES = [
      `${BASEURL}/bg_night.png`,
      `${BASEURL}/bg.png`,
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
    return <TitleScreen onStart={() => setStarted(true)} />;
  }

  return (
    <Story />
  );
}
export default MyTitaCecilia;