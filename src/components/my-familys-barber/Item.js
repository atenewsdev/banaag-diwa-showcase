import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { useTransition, animated } from 'react-spring';

import { CDN_URL } from '../../utils/constants';

const images = [
  '1hairlong.gif',
  '1hairlongcut.gif',
  '2hairlong.gif',
  '2hairlongcut.gif',
  '3Hairlong.png'
]

const Item = React.forwardRef(({ version, onLoad, selected }, ref) => {
  const [index, set] = React.useState(version);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  React.useEffect(() => {
    set(version);
    onLoad();
  }, [version, onLoad]);
  // 
  return (
    <Box
      w="100vw"
      h="100vh"
    >
      <Center h="100%" style={{
        position: 'relative'
      }}>
        { transitions((style, i) => (
          <animated.div
            ref={ref}
            style={{
              ...style,
              position: 'absolute',
              backgroundImage: `url(${CDN_URL}/2021/06/${images[i]})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
              width: '100vw'
            }}
          />
        )) }
      </Center>
    </Box>
  );
});

export default Item;