import React from 'react';

import { Box, SimpleGrid, Flex, Image, Text, Center, VStack, chakra } from '@chakra-ui/react';

import ConceptImage from '../components/home/ConceptImage';

const Home = () => {
  return (
    <chakra.div backgroundColor="#233342" padding={0} margin={0}>
      <Box h="100vh" w="100%" padding={0} margin={0}>
        <Box padding="3rem">
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
        <SimpleGrid columns={2} spacing={10}>
          <Box fontFamily="PublicoText" color="#FFFFFF">
            <Center h="100%" w="100%">
              <VStack spacing="2rem">
                <Text letterSpacing="2rem" fontSize="5rem" lineHeight="1rem">P<chakra.span fontSize="4rem" >ANDEMYA</chakra.span></Text>
                <Text fontFamily="Lato" fontSize="1rem">SHORT STORIES   ·   POEMS</Text>
              </VStack>
            </Center>
          </Box>
          <ConceptImage />
        </SimpleGrid>
      </Box>
      <Box w="100%" paddingLeft="10rem" paddingRight="10rem" margin={0}>
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">F<chakra.span fontSize="1.6rem" >OREWORD</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ornare lorem massa. Eget ipsum sed in leo netus. Quam placerat ut accumsan, arcu. Vulputate sed tincidunt vel non neque a diam sed.
          </Text>
        </Box>
      </Box>
      <Box w="100%" marginTop="5rem" paddingLeft="10rem" paddingRight="10rem">
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">P<chakra.span fontSize="1.6rem" >OEMS</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ornare lorem massa. Eget ipsum sed in leo netus. Quam placerat ut accumsan, arcu. Vulputate sed tincidunt vel non neque a diam sed.
          </Text>
        </Box>
      </Box>
      <Box w="100%" marginTop="5rem" paddingLeft="10rem" paddingRight="10rem">
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">S<chakra.span fontSize="1.6rem" >HORT STORIES</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ornare lorem massa. Eget ipsum sed in leo netus. Quam placerat ut accumsan, arcu. Vulputate sed tincidunt vel non neque a diam sed.
          </Text>
        </Box>
      </Box>
      <Box w="100%" h="20vh" />
    </chakra.div>
  );
}

export default Home;