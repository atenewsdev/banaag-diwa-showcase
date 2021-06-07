import React from 'react';

import { Box, SimpleGrid, Flex, Image, Text, Center, VStack, chakra } from '@chakra-ui/react';

import { useHistory } from "react-router-dom";

import ConceptImage from '../components/home/ConceptImage';
import Card from '../components/home/Card';

const Home = () => {
  const history = useHistory();

  return (
    <chakra.div backgroundColor="#233342" padding={0} margin={0} minW="100vw">
      <Box minH="100vh" w="100%" padding={0} margin={0}>
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
        <SimpleGrid spacing="3rem" minChildWidth="360px">
          <Box fontFamily="PublicoText" color="#FFFFFF">
            <Center h="100%" w="100%">
              <VStack spacing="2rem">
                <Text letterSpacing="clamp(0.5rem, 1vw, 2rem)" fontSize="clamp(3rem, 5vw, 5rem)" lineHeight="1rem">P<chakra.span fontSize="clamp(2.4rem, 4vw, 4rem)" >ANDEMYA</chakra.span></Text>
                <Text fontFamily="Lato" fontSize="1rem">SHORT STORIES   ·   POEMS</Text>
              </VStack>
            </Center>
          </Box>
          <ConceptImage />
        </SimpleGrid>
      </Box>
      <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)" margin={0}>
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">F<chakra.span fontSize="1.6rem" >OREWORD</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut ornare lorem massa. Eget ipsum sed in leo netus. Quam placerat ut accumsan, arcu. Vulputate sed tincidunt vel non neque a diam sed.
          </Text>
          <br />
          <Text>
            Amet volutpat pharetra ut fusce egestas eget consequat. In facilisis in massa viverra quam felis purus pellentesque etiam. In amet neque tempus risus odio dolor, laoreet amet. Tortor eget commodo, sed imperdiet sit gravida diam sagittis purus. Amet vulputate mauris eros cursus. Pretium nibh mauris eget molestie. Urna vitae malesuada in fermentum gravida lobortis. Adipiscing non facilisis tempus interdum.
          </Text>
        </Box>
      </Box>
      <Box w="100%" marginTop="5rem" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)">
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">P<chakra.span fontSize="1.6rem" >OEMS</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
            <Card 
              src="/assets/poems/apathy.gif"
              title="Apathy"
              award="honorable"
              titleSrc="/assets/titles/on apathy.png"
              onClick={() => history.push('/')}
            />
            <Card
              src="/assets/poems/red-child.gif"
              title="Red Child"
              award="honorable"
              titleSrc="/assets/titles/red child.png"
              onClick={() => history.push('/')}
            />
            <Card
              src="/assets/poems/the-visitor.gif"
              title="The Visitor"
              award="honorable"
              titleSrc="/assets/titles/the visitor.png" 
              onClick={() => history.push('/')}
            />
            <Card
              src="/assets/poems/the-visitor.gif"
              title="The Visitor"
              award="special" 
              onClick={() => history.push('/')}
            />
          </SimpleGrid>
        </Box>
      </Box>
      <Box w="100%" marginTop="5rem" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)">
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">S<chakra.span fontSize="1.6rem" >HORT STORIES</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <SimpleGrid columns={1} spacing={10}>
            <Card
              src="/assets/my-tita-cecilia/bg.png"
              title="My Tita Cecilia"
              award="first"
              titleSrc="/assets/titles/my tita cecilia.png"
              onClick={() => history.push('/my-tita-cecilia')}
            />
            <Card
              src="/assets/no-notifs/scene01.jpg"
              title="No Notifs"
              award="second"
              titleSrc="/assets/titles/no notifs.png"
              maxWidth="clamp(15rem, 40vw, 40rem)" 
              onClick={() => history.push('/no-notifs')}
            />
          </SimpleGrid>
        </Box>
      </Box>
      <Box w="100%" h="20vh" />
    </chakra.div>
  );
}

export default Home;