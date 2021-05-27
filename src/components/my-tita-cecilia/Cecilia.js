import React from 'react';
import { Box, Image, Center } from '@chakra-ui/react';

const Cecilia = React.forwardRef(({ version, onLoad }, ref) => {
  const getImage = () => {
    switch (version) {
      case 2:
        return 'elem_2';
      case 3:
        return 'elem_3';
      default:
        return 'elem_1';
    }
  }
  return (
    <Box
      w="100%"
      h="100vh"
    >
      <Center h="100%">
        <Image
          src={`/assets/my-tita-cecilia/${getImage()}.png`}
          alt="Tita Cecilia"
          filter="drop-shadow(5px 5px 5px #222222)"
          maxHeight="100%"
          maxWidth="100%"
          ref={ref}
          onLoad={onLoad}
        />
      </Center>
    </Box>
  );
});

export default Cecilia;