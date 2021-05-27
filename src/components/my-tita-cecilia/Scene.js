import React from 'react';
import { Box } from '@chakra-ui/react';

const Scene = ({ children, night }) => {
  return (
    <>
      <Box
        position="fixed"
        w="100vw"
        h="100vh"
        bgImage={`/assets/my-tita-cecilia/${night ? 'bg_night.png' : 'bg.png'}`}
        bgSize="contain"
        bgPos="center"
        bgRepeat="no-repeat"
        bgColor="black"
        zIndex="-1"
      >
        { children }
      </Box>
    </>
  );
}
export default Scene;