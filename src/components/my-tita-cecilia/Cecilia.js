import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { useTransition, animated } from 'react-spring';


const images = [
  'elem_1',
  'elem_2',
  'elem_3',
  'elem_4',
  'elem_6',
  'elem_7',
  'elem_8'
]

const Cecilia = React.forwardRef(({ version, onLoad, selected }, ref) => {
  const [index, set] = React.useState(version);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });

  React.useEffect(() => {
    set(version);
  }, [version]);

  return (
    <Box
      w="100vw"
      h="100vh"
    >
      <Center h="100%" style={{
        position: 'relative'
      }}>
        { transitions((style, i) => (
          <animated.img
            src={`/assets/my-tita-cecilia/${images[i]}.png`}
            alt="Tita Cecilia"
            ref={ref}
            style={{
              ...style,
              position: 'absolute',
              filter: `${selected ? 'drop-shadow(5px 5px 5px #222222)' : '' }`,
              maxHeight: '100%',
              maxWidth: '100%'
            }}
            onLoad={onLoad}
          />
        )) }
      </Center>
    </Box>
  );
});

export default Cecilia;