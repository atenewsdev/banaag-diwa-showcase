import React from 'react';
import { Box, Center, Image, Text } from '@chakra-ui/react';

import { CDN_URL } from '../utils/constants';

const RedChild = () => {
  return (
    <Box
      w="100vw"
      minH="100vh"
      color="white"
      paddingBottom="30vh"
      _before={{
        content: '" "',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('${CDN_URL}/2021/06/red-child.gif')`,
        backgroundSize: 'cover',
        willChange: 'transform',
        zIndex: -1
      }}
    >
      <Center h="100vh">
        <Image src={`${CDN_URL}/2021/06/red-child.png`} maxW="70vw" />
      </Center>
      <Center>
        <Text>
          you taught him<br />
          to color inside the lines<br />
          sketch his paper heart<br />
          in semi circles<br />
          to circumvent the indiscretion<br />
          of your porcelain child<br />
          <br />
          is it really a sin<br />
          that his sun is a square<br />
          tell me, will it shine less?<br />
        </Text>
      </Center>
    </Box>
  );
}

export default RedChild;