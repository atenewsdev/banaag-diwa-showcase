import React from 'react';

import { chakra } from '@chakra-ui/react';
import { useTransition, animated } from 'react-spring';

const images = [
  '/assets/home/Concept-1.gif',
  '/assets/home/Concept-2.gif'
]

const ConceptImage = () => {
  const [index, set] = React.useState(0);
  const transitions = useTransition(index, {
    key: `concept-image-${index}`,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  React.useEffect(() => {
    let interval = null;

    interval = setInterval(function(){
      set((prev) => {
        if (prev === 0) {
          return 1;
        }
        return 0;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <chakra.div position="relative" flex="1" maxWidth="100vw" minHeight="60vh">
      { transitions((style, i) => (
        <animated.div
          style={{
            ...style,
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundImage: `url(${images[i]})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )) }
    </chakra.div>
  );
}

export default ConceptImage;