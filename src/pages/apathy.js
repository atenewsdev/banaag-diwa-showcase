import React from 'react';
import { Box, Center, Image, Text } from '@chakra-ui/react';

const Apathy = () => {
  return (
    <Box
      background="linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://cdn.statically.io/img/wp.atenews.ph/f=auto/wp-content/uploads/2021/06/apathy.gif')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      w="100vw"
      minH="100vh"
      color="white"
      paddingBottom="30vh"
    >
      <Center h="100vh">
        <Image src="https://cdn.statically.io/img/wp.atenews.ph/f=auto/wp-content/uploads/2021/06/on-apathy.png" maxW="70vw" />
      </Center>
      <Center>
        <Text>
          must we go about unrepentant<br />
          must we go about with soft knees<br />
          idle hands and dry eyes<br />
          guiltless of<br />
          the raw throbbing in our chests?<br />
          <br />
          in the name of civility<br />
          and discretion<br />
          we go on unfeeling<br />
          sauntering<br />
          across an open graveyard<br />
          like a slow<br />
          stroll in the park.<br />
        </Text>
      </Center>
    </Box>
  );
}

export default Apathy;