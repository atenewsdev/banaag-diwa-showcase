import React from 'react';

import {
  Box,
  SimpleGrid,
  Text,
  chakra,
} from '@chakra-ui/react';

import { useHistory } from "react-router-dom";
import Card from './Card';

import { CDN_URL } from '../../utils/constants';

const ShortStories = () => {
  const history = useHistory();

  return (
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
            id="mahal"
            title="Mahal"
            author="Ronalyn Arangale"
            onClick={() => history.push('/stories/mahal')}
          />
          <Card
            id="a-remnant-of-war"
            title="A Remnant of War"
            author="Mae Antonnette Balili"
            onClick={() => history.push('/stories/a-remnant-of-war')}
          />
          <Card
            id="a-problem-of-bees"
            title="A Problem of Bees"
            author="Jean Sin"
            onClick={() => history.push('/stories/a-problem-of-bees')}
          />
          <Card
            id="elevator-girl"
            title="Elevator Girl"
            author="Jean Sin"
            onClick={() => history.push('/stories/elevator-girl')}
          />
          <Card
            id="pandummyc"
            title="PANdummyC: A not so typical short love story of a dummy account during pandemic"
            author="dKt3k"
            onClick={() => history.push('/stories/pandummyc')}
          />
          <Card 
            id="the-white-building"
            title="THE WHITE BUILDING"
            author="Sean Anthony Penn Lacorte"
            onClick={() => history.push('/stories/the-white-building')}
          />
          <Card
            id="liham-ng-paghayo"
            title="LIHAM NG PAGHAYO"
            author="Ahman Lee Miranda"
            onClick={() => history.push('/stories/liham-ng-paghayo')}
          />
          <Card
            id="ang-paboritong-halakhak-ng-payasong-hilaw"
            title="Ang Paboritong Halakhak ng Payasong Hilaw"
            author="Lea Kate M. Tambis"
            onClick={() => history.push('/stories/ang-paboritong-halakhak-ng-payasong-hilaw')}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default ShortStories;