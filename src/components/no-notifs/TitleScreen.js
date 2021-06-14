import React from 'react';
import { Center, Image, Button, SimpleGrid, Box } from '@chakra-ui/react';

import { CDN_URL } from '../../utils/constants';

const TitleScreen = ({ onStart }) => {

  return (
    <Box bgColor="#030303" bg="#030303">
      <Center w="100vw" h="100vh">
        <SimpleGrid columns={1} spacing={10}>
          <Image src={`${CDN_URL}/2021/06/no-notifs.png`} alt="No Notifs" w="50vw" />
          <Center>
            <Image src={`${CDN_URL}/2021/06/low-batt_edited.gif`} alt="Battery" w="15vw" />
          </Center>
          <Button colorScheme="whiteAlpha" variant="ghost" color="white" onClick={onStart}>
            Start Reading &gt;&gt;
          </Button>
        </SimpleGrid>
      </Center>
    </Box>
  );
}
export default TitleScreen;