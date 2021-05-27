import React from 'react';

import { Text } from '@chakra-ui/react';

import useCurrentWidth from '../utils/useCurrentWidth';

import Scene from '../components/my-tita-cecilia/Scene';
import Cecilia from '../components/my-tita-cecilia/Cecilia';
import Dialog from '../components/my-tita-cecilia/Dialog';

const MyTitaCecilia = () => {
  const ref = React.useRef();
  const width = useCurrentWidth();

  const [bgWidth, setBgWidth] = React.useState(0);
  const [bgLoaded, setBgLoaded] = React.useState(false);

  React.useEffect(() => {
    if (bgLoaded){
      console.log(ref.current.clientWidth);
      setBgWidth(ref.current.clientWidth)
    }
  }, [ref, width, bgLoaded]);

  return (
    <>
      <Scene>
        <Cecilia
          version={1}
          ref={ref}
          onLoad={() => setBgLoaded(true)}
        />
      </Scene>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
      <Dialog marginRight={(width - bgWidth) / 2}>
        <Text>
          It was always like this. We let each day in the week dissolve in complete vitriol, including
          weekends. There was no escape from the endless blithering, each of us always had caustic things
          to say to each other, and it almost always ends in a long silence. And those moments of quiet, it’s
          not like we’ve stopped fighting. They’re nothing but brief pauses to rest and prepare rebuttals for
          each other once the temporary truce ends. After that, the flags are raised again, and another war
          is waged.
        </Text>
      </Dialog>
    </>
  );
}
export default MyTitaCecilia;