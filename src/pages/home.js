import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  SimpleGrid,
  Flex,
  Image,
  Text,
  Center,
  Spinner,
  VStack,
  chakra,
} from '@chakra-ui/react';

import ConceptImage from '../components/home/ConceptImage';

const AboutTheTheme = React.lazy(() => import('../components/home/AboutTheme'));
const Contributors = React.lazy(() => import('../components/home/Contributors'));
const Foreword = React.lazy(() => import('../components/home/Foreword'));
const Poems = React.lazy(() => import('../components/home/Poems'));
const ShortStories = React.lazy(() => import('../components/home/ShortStories'));

const Loading = () => (
  <Center w="100%">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
)

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Banaag Diwa | Atenews</title>
        <meta
          name="description"
          content="Banaag Diwa, the official literary folio of Atenews, calls on the growing literary and photography community of Ateneo de Davao University to examine, capture, and reveal the concentric factors that have plagued our humanity since and have now enabled the tragedy of this pandemic. Writers and photographers are invited to take part this year’s Banaag Diwa: Pandemya."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://banaag-diwa.atenews.ph" />
        <meta property="og:title" content="Banaag Diwa | Atenews" />
        <meta property="og:description" content="Banaag Diwa, the official literary folio of Atenews, calls on the growing literary and photography community of Ateneo de Davao University to examine, capture, and reveal the concentric factors that have plagued our humanity since and have now enabled the tragedy of this pandemic. Writers and photographers are invited to take part this year’s Banaag Diwa: Pandemya." />
        <meta property="og:image" content="%PUBLIC_URL%/preview.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://banaag-diwa.atenews.ph" />
        <meta property="twitter:title" content="Banaag Diwa | Atenews" />
        <meta property="twitter:description" content="Banaag Diwa, the official literary folio of Atenews, calls on the growing literary and photography community of Ateneo de Davao University to examine, capture, and reveal the concentric factors that have plagued our humanity since and have now enabled the tragedy of this pandemic. Writers and photographers are invited to take part this year’s Banaag Diwa: Pandemya." />
        <meta property="twitter:image" content="%PUBLIC_URL%/preview.jpg" />
      </Helmet>
      <chakra.div backgroundColor="#233342" padding={0} margin={0} minW="100vw">
        <Box minH="100vh" w="100%" padding={0} marginBottom="3rem">
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
        <Suspense fallback={<Loading />}>
          <Foreword />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Poems />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ShortStories />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <AboutTheTheme />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Contributors />
        </Suspense>
        <Box w="100%" h="20vh" />
      </chakra.div>
    </>
  );
}

export default Home;