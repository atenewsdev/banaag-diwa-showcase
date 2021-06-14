import React from 'react';

import { Box, SimpleGrid, Flex, Image, Text, Center, VStack, chakra, useBreakpointValue } from '@chakra-ui/react';

import { useHistory } from "react-router-dom";

import ConceptImage from '../components/home/ConceptImage';
import Card from '../components/home/Card';

import { CDN_URL } from '../utils/constants';

const Home = () => {
  const history = useHistory();
  const height = useBreakpointValue({ base: 200, md: 400 });

  return (
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
          <SimpleGrid columns={[1, 1, 3]} marginBottom={10} position="relative">
            <img src={`${CDN_URL}/2021/06/honorable-mention-laurel.png`} alt="Award" style={{
              position: 'absolute',
              left: '1rem',
              top: '1rem',
              maxWidth: 'clamp(15rem, 20vw, 20rem)',
              zIndex: 1
            }} />
            <Card
              src={`${CDN_URL}/2021/06/apathy.gif`}
              title="Apathy"
              titleSrc={`${CDN_URL}/2021/06/on-apathy.png`}
              onClick={() => history.push('/apathy')}
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height
              }}
            />
            <Card
              src={`${CDN_URL}/2021/06/red-child.gif`}
              title="Red Child"
              titleSrc={`${CDN_URL}/2021/06/red-child.png`}
              onClick={() => history.push('/red-child')}
              style={{
                borderRadius: 0,
                height
              }}
            />
            <Card
              src={`${CDN_URL}/2021/06/the-visitor.gif`}
              title="The Visitor"
              titleSrc={`${CDN_URL}/2021/06/the-visitor.png`}
              onClick={() => history.push('/the-visitor')}
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                height
              }}
            />
          </SimpleGrid>
          <SimpleGrid columns={[1]} spacing={10} marginBottom={10}>
            <Card
              src={`${CDN_URL}/2021/06/pahungaw.jpg`}
              title="Pahungaw"
              titleSrc={`${CDN_URL}/2021/06/pahungaw.png`}
              award="special" 
              onClick={() => history.push('/pahungaw')}
            />
          </SimpleGrid>
          <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
            <Card
              title="Lying; Lazy Day; Man, Look Out"
              author="Franky Arrocena"
              onClick={() => history.push('/poems/arrocena')}
            />
            <Card
              title="Grace of Pandemya"
              author="Marie Anne Bernal"
              onClick={() => history.push('/poems/bernal')}
            />
            <Card
              title="Daily Routine; The Domino Effect; Unrest"
              author="Frances Dane Delfin"
              onClick={() => history.push('/poems/delfin')}
            />
            <Card
              title="Pandemic Confession; Everything Could Get Worse; Unsafe/Unsettling; Invariant"
              author="Chiarah Gulle"
              onClick={() => history.push('/poems/gulle')}
            />
            <Card
              title="A Tabula Rasa; Beginning of Sorrows; I Wish it's Au Revoir and Not Goodbye!; Metamorphosis"
              author="Jose Ronnie Malayo Jr."
              onClick={() => history.push('/poems/malayo-jr')}
            />
            <Card
              title="&#x201C; Simula o katapusan &#x201C;; Dilim; &#x201C;Paano siya, Paano Ka, Paano Sila &#x201C;"
              author="Ahman Lee Miranda"
              onClick={() => history.push('/poems/miranda')}
            />
            <Card
              title="Death of a Daydreamer; Poison Marked Love; Relapse; Passing"
              author="Ronald Jay Ortiz"
              onClick={() => history.push('/poems/ortiz')}
            />
            <Card
              title="Pasyal"
              author="Mark Renz Perez"
              onClick={() => history.push('/poems/perez')}
            />
            <Card
              title="Hibernation; Self-isolation; In Budapest I made it rain flowers; I can finally write a poem"
              author="Ian Salvaña"
              onClick={() => history.push('/poems/salvana')}
            />
            <Card
              title="“PANDEMYA”"
              author="Von Marx Secang"
              onClick={() => history.push('/poems/secang')}
            />
            <Card
              title="9 MONTHS IN LIMBO"
              author="Daniel Carlos Tan"
              onClick={() => history.push('/poems/tan')}
            />
            <Card
              title="Lockdown; Protocol; Resilient; Kagaya ng Dati"
              author="Miguel Angelo Francesco Toledo"
              onClick={() => history.push('/poems/toledo')}
            />
            <Card
              title="Memories (2020)"
              author="Percival Cyber Vargas"
              onClick={() => history.push('/poems/vargas')}
            />
            <Card
              title="“Mahal Kong Juan dela Cruz”; “Hangga’t may mga Oportunista”; Alpabetong Pilipino"
              author="Praise Varian"
              onClick={() => history.push('/poems/varian')}
            />
            <Card
              title="The demise of our Paradise?"
              author="Wilson Angelo Wang"
              onClick={() => history.push('/poems/wang')}
            />
          </SimpleGrid>
        </Box>
      </Box>
      <Box w="100%" marginTop="5rem" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)">
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">S<chakra.span fontSize="1.6rem" >HORT STORIES</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <SimpleGrid columns={1} spacing={10} marginBottom={10}>
            <Card
              src={`${CDN_URL}/2021/06/bg.jpg`}
              title="My Tita Cecilia"
              award="first"
              titleSrc={`${CDN_URL}/2021/06/my-tita-cecilia.png`}
              onClick={() => history.push('/my-tita-cecilia')}
            />
            <Card
              src={`${CDN_URL}/2021/06/scene01.jpg`}
              title="No Notifs"
              award="second"
              titleSrc={`${CDN_URL}/2021/06/no-notifs.png`}
              maxWidth="clamp(15rem, 40vw, 40rem)" 
              onClick={() => history.push('/no-notifs')}
            />
            <Card
              src={`${CDN_URL}/2021/06/bg.gif`}
              title="My Family's Barber"
              award="honorable"
              titleSrc={`${CDN_URL}/2021/06/my-familys-barber.png`}
              onClick={() => history.push('/my-familys-barber')}
            />
          </SimpleGrid>
          <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
            <Card 
              title="“Mahal”"
              author="Ronalyn Arangale"
              onClick={() => history.push('/stories/mahal')}
            />
            <Card 
              title="A Remnant of War"
              author="Mae Antonnette Balili"
              onClick={() => history.push('/stories/a-remnant-of-war')}
            />
            <Card 
              title="A Problem of Bees"
              author="Jean Sin"
              onClick={() => history.push('/stories/a-problem-of-bees')}
            />
            <Card 
              title="Elevator Girl"
              author="Jean Sin"
              onClick={() => history.push('/stories/elevator-girl')}
            />
            <Card 
              title="PANdummyC: A not so typical short love story of a dummy account during pandemic"
              author="dKt3k"
              onClick={() => history.push('/stories/pandummyc')}
            />
            <Card 
              title="THE WHITE BUILDING"
              author="Sean Anthony Penn Lacorte"
              onClick={() => history.push('/stories/the-white-building')}
            />
            <Card 
              title="“LIHAM NG PAGHAYO” "
              author="Ahman Lee Miranda"
              onClick={() => history.push('/stories/liham-ng-paghayo')}
            />
            <Card 
              title="Ang Paboritong Halakhak ng Payasong Hilaw"
              author="Lea Kate M. Tambis"
              onClick={() => history.push('/stories/ang-paboritong-halakhak-ng-payasong-hilaw')}
            />
          </SimpleGrid>
        </Box>
      </Box>
      <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)"  marginTop="5rem">
        <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">A<chakra.span fontSize="1.6rem" >BOUT THE THEME</chakra.span></Text>

        <Box color="white" fontFamily="Lato" marginTop="3rem">
          <Text>
            When the Atenews Editorial Board conceived the idea of Banaag Diwa Pandemya, it was still at the height of much uncertainty and fear of the novel Coronavirus back in March 2020. Classes had been suspended and later an Enhanced Community Quarantine was implemented in Davao City. For the first time, this emptied the streets of the busy metropolis, and even life itself seemed to have paused. 
          </Text>
          <br />
          <Text>
            We have to admit it was quite out of the ordinary. And something about the words ‘pandemic’ and ‘quarantine’ made us feel like we were living the science fiction novels that we used to only dream about with our peers. That was Covid-19 to us back then, a dream that we all hoped we would awaken from sooner or later. But more than a year into the pandemic, nothing has changed for the better. The dream had only become a nightmare.
          </Text>
          <br />
          <Text>
            While other countries like New Zealand and even our Asian neighbors including Singapore, Taiwan, and South Korea have flattened the curve, the Philippine situation is bleak as it is hopeless. Under pressure to please its neoliberal allies than truly alleviate the financial hardship of millions, the Philippine government rushed to reopen the economy erstwhile lacking aggressive contact tracing and testing. The welfare of hospital workers and the improvement of health facilities were eclipsed by towering attention for the police and the military, and government officials were fast to admit fatalism in the face of public ire.
          </Text>
          <br />
          <Text>
            With the advent of vaccines, our strongest and perhaps, the only chance of going back to ‘normal’, the Philippines’ third-world status subjected it to passivity as nations in the ‘developed’ world hoarded vials that were so much more than what they needed. Back home, we sat waiting for the mercy of our dodgy Chinese allies for the controversial Sinovac while our Asian neighbors locally developed their own vaccines.
          </Text>
          <br />
          <Text>
            Banaag Diwa Pandemya is thus more than just an anthology of our shared pandemic experience; it is an amalgamation of our abandoned hopes and frustrations as a community and as a people. Far from showcasing dreamy quarantine lives like we originally intended, this year’s theme bears witness to Filipinos’ long stretch of suffering in what could have been a fairly brief interlude if we were not failed by our leaders.
          </Text>
          <br />
          <Text>
            And yet, despite the danger of desensitization to violence, injustice, and death, Banaag Diwa Pandemya is here to remind us that there are human tales to every tally, human lives to every line in that ever-expanding graph. 
          </Text>
        </Box>
      </Box>
      <Box w="100%" h="20vh" />
    </chakra.div>
  );
}

export default Home;