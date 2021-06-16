import React from 'react';

import {
  Box,
  Text,
  chakra,
} from '@chakra-ui/react';


const Foreword = () => {
  return (
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
        <br />
        <Text marginTop="3rem">
          Gwyneth Marie Vasquez<br />
          Atenews Editor-in-Chief, 2020-2021<br />
          June 2021<br />
        </Text>
      </Box>
    </Box>
  );
}

export default Foreword;