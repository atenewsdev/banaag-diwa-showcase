import React from 'react';

import {
  Box,
  SimpleGrid,
  Text,
  chakra,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useHistory } from "react-router-dom";

import Card from './Card';

import { CDN_URL } from '../../utils/constants';

const Poems = () => {
  const history = useHistory();
  const height = useBreakpointValue({ base: 200, md: 400 });

  return (
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
            id="apathy"
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
            id="red-child"
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
            id="the-visitor"
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
            id="pahungaw"
            src={`${CDN_URL}/2021/06/pahungaw.jpg`}
            title="Pahungaw"
            titleSrc={`${CDN_URL}/2021/06/pahungaw1.png`}
            award="special" 
            onClick={() => history.push('/pahungaw')}
          />
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={10}>
          <Card
            id="arrocena"
            title="Lying; Lazy Day; Man, Look Out"
            author="Franky Arrocena"
            onClick={() => history.push('/poems/arrocena')}
          />
          <Card
            id="bernal"
            title="Grace of Pandemya"
            author="Marie Anne Bernal"
            onClick={() => history.push('/poems/bernal')}
          />
          <Card
            id="delfin"
            title="Daily Routine; The Domino Effect; Unrest"
            author="Frances Dane Delfin"
            onClick={() => history.push('/poems/delfin')}
          />
          <Card
            id="gulle"
            title="Pandemic Confession; Everything Could Get Worse; Unsafe/Unsettling; Invariant"
            author="Chiarah Gulle"
            onClick={() => history.push('/poems/gulle')}
          />
          <Card
            id="malayo-jr"
            title="A Tabula Rasa; Beginning of Sorrows; I Wish it's Au Revoir and Not Goodbye!; Metamorphosis"
            author="Jose Ronnie Malayo Jr."
            onClick={() => history.push('/poems/malayo-jr')}
          />
          <Card
            id="miranda"
            title="Simula o katapusan; Dilim; Paano siya, Paano Ka, Paano Sila"
            author="Ahman Lee Miranda"
            onClick={() => history.push('/poems/miranda')}
          />
          <Card
            id="ortiz"
            title="Death of a Daydreamer; Poison Marked Love; Relapse; Passing"
            author="Ronald Jay Ortiz"
            onClick={() => history.push('/poems/ortiz')}
          />
          <Card
            id="perez"
            title="Pasyal"
            author="Mark Renz Perez"
            onClick={() => history.push('/poems/perez')}
          />
          <Card
            id="salvana"
            title="Hibernation; Self-isolation; In Budapest I made it rain flowers; I can finally write a poem"
            author="Ian Salvaña"
            onClick={() => history.push('/poems/salvana')}
          />
          <Card
            id="secang"
            title="PANDEMYA"
            author="Von Marx Secang"
            onClick={() => history.push('/poems/secang')}
          />
          <Card
            id="tan"
            title="9 MONTHS IN LIMBO"
            author="Daniel Carlos Tan"
            onClick={() => history.push('/poems/tan')}
          />
          <Card
            id="toledo"
            title="Lockdown; Protocol; Resilient; Kagaya ng Dati"
            author="Miguel Angelo Francesco Toledo"
            onClick={() => history.push('/poems/toledo')}
          />
          <Card
            id="vargas"
            title="Memories (2020)"
            author="Percival Cyber Vargas"
            onClick={() => history.push('/poems/vargas')}
          />
          <Card
            id="varian"
            title="Mahal Kong Juan dela Cruz; Hangga’t may mga Oportunista; Alpabetong Pilipino"
            author="Praise Varian"
            onClick={() => history.push('/poems/varian')}
          />
          <Card
            id="wang"
            title="The demise of our Paradise?"
            author="Wilson Angelo Wang"
            onClick={() => history.push('/poems/wang')}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Poems;