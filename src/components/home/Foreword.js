import React from 'react';

import {
  Box,
  Text,
  chakra,
} from '@chakra-ui/react';

const Foreword = () => {
  return (
    <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)" margin={0}>
      <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">F<chakra.span fontSize="1.6rem" >OREWORD</chakra.span></Text>

      <Box color="white" fontFamily="Lato" marginTop="3rem">
        <Text>
          How underlying systemic inequalities and injustices are uncovered is a matter between circumstance and choice. Though not mutually exclusive, the former is generally dependent on external factors predominantly out of one’s control, while the latter is contingent upon one’s action or inaction.
        </Text>
        <br />
        <Text>
          The COVID-19 pandemic has unveiled how revolting and terrifying our existing systems are—or the lack thereof. The coronavirus has not only infected and taken millions of lives but also bared how weak and helpless humankind can be when faced with an adversary as natural and as complex as a virus. 
        </Text>
        <br />
        <Text>
          Owing to this circumstance, we realize that—more than our innate incapacities—the faults in our systems have left and reduced the most vulnerable into mere numbers and cannon fodders. This made us aware of the facilities and policies our civilization already possesses and those that we still need or failed to acquire, such as the “Pandemic and All-Hazards Preparedness Act” bill which remained pending for almost a decade after its first filing back in 2013.
        </Text>
        <br />
        <Text>
          As the people struggle to respond against the outbreak, utterly unprepared and blindsided, the choice between death and survival that is readily accessible only to a few has become inevitable to some and even unavailable to many. This global tragedy is still unfolding, yet more than a year through it, only superficial solutions from our governments could be seen. Consequently, problems on top of problems have only accumulated over time. From their outright denial to their best efforts in twisting and downplaying the public health emergency—the unsettling calls for action only grew louder and longer.
        </Text>
        <br />
        <Text>
          Yet by way of choice, the demand for concrete solutions and comprehensive response from our leaders is actively voiced out in all platforms available. Hence, Atenews, as one of those platforms, advances these voices further through its annual literary folio, Banaag Diwa: Pandemya—its sincere attempt to capture and understand the downstream consequences of the current health crisis. The voices who chose to call out and expose the discontent and distress amplified by the pandemic reveals how this infectious disease is only an aspect of a larger, ongoing health crisis that has been left to take root and deliberately unnoticed for years.
        </Text>
        <br />
        <Text>
          Realities concealed amongst the intricacy of poems and exposed along the lines of fiction are altogether explored by Ateneo’s literary community whose yearning for writing persisted even in these trying times.
        </Text>
        <br />
        <Text>
          Through Banaag Diwa: Pandemya, we also come to realize that the most menacing forms of infections are not the ones that manifest physical and superficial symptoms, but rather those disguised and deep-seated. They lurk in our systems; they feed and thrive on our vulnerabilities. And only when a circumstance, or a choice, allows it—only then would they reveal their true forms and intents. Until then, they are hidden, systemic, and far-reaching, which ultimately makes them all the more daunting.
        </Text>
      </Box>
    </Box>
  );
}

export default Foreword;