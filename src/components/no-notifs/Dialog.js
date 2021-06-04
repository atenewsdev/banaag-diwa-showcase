import React from 'react';
import { Box, Flex, } from '@chakra-ui/react';

const Dialog = ({ children, margin, onMouseEnter, onMouseLeave }) => {

  const BaseBox = () => (
    <Box
      marginTop="1rem"
      w="40%"
      color="white"
      bgImage={`linear-gradient(to left, 
        rgba(0,0,0, 0), 
        rgba(0,0,0, 1) 60%)`}
      fontSize="clamp(0.5rem, -0.875rem + 4vw, 1rem)"
      padding="2rem"
      transition="0.2s"
      textAlign='left'
      textShadow="3px 3px 3px #000000"
      _hover={{
        filter: 'drop-shadow(5px 5px 5px #000000)'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Box>
  )

  return (
    <Flex>
      <Box w={margin} />
      <BaseBox />
    </Flex>
  );
}
export default Dialog;