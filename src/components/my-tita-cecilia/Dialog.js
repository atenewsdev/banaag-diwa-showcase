import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';

const Dialog = ({ children, margin, onMouseEnter, onMouseLeave, left }) => {

  const BaseBox = () => (
    <Box
      marginTop="1rem"
      w="30%"
      color="white"
      bgColor="blackAlpha.800"
      borderRadius="1rem"
      padding="3rem"
      transition="0.2s"
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
      { !left ? (
        <>
          <Spacer />
          <BaseBox />
          <Box w="3vw" />
          <Box w={margin} />
        </>
      ) : (
        <>
          <Box w={margin} />
          <Box w="3vw" />
          <BaseBox />
        </>
      ) }
    </Flex>
  );
}
export default Dialog;