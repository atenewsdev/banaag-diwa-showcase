import React from 'react';

import { Box, Text, chakra, Flex, Center, Image } from '@chakra-ui/react';

const Error404 = () => {
  return (
    <chakra.div backgroundColor="#233342" padding={0} margin={0} minW="100vw" minH="100vh">
      <Box padding="3rem" marginBottom="5rem">
        <Flex>
          <Center>
            <Image src="/icon-256x256.png" alt="BD" width="2rem" marginRight="1rem" />
          </Center>
          <Center>
            <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="0.3em">
              B<chakra.span fontSize="0.75rem">ANAAG</chakra.span>&nbsp;D<chakra.span fontSize="0.75rem">IWA</chakra.span>
            </Text>
          </Center>
        </Flex>
      </Box>
      <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)" margin={0}>
        <Center h="100%">
          <Box color="white" fontFamily="Lato" marginTop="3rem">
            <Text textAlign="center">
              <chakra.span fontFamily="PublicoText" color="#E7B089" fontSize="1.6rem">
                <chakra.span color="#fff">Error 404!</chakra.span><br />Page not found!
              </chakra.span>
            </Text>
          </Box>
        </Center>
      </Box>
    </chakra.div>
  )
}

export default Error404;