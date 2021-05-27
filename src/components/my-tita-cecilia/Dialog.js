import React from 'react';
import { Box, Center, Flex, Spacer } from '@chakra-ui/react';

const Dialog = ({ children, marginRight }) => {
  return (
    <Flex>
      <Spacer />
      <Box
        marginTop="10rem"
        w="30%"
        color="white"
        bgColor="blackAlpha.800"
        borderRadius="2rem"
        padding="3rem"
        transition="0.2s"
        _hover={{
          filter: 'drop-shadow(5px 5px 5px #000000)'
        }}
      >
        <Center h="100%">
          {children}
        </Center>
      </Box>
      <Box w="3vw" />
      <Box w={marginRight} />
    </Flex>
  );
}
export default Dialog;