import React from 'react';

import {
  Box,
  SimpleGrid,
  Text,
  chakra,
} from '@chakra-ui/react';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import stringToSlug from '../../utils/stringToSlug';

import artists from '../../data/contributors/artists';
import editors from '../../data/contributors/editors';
import judges from '../../data/contributors/judges';
import writers from '../../data/contributors/writers';

const Accordion = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: '1px solid rgba(231, 176, 137, 1)',
    borderRadius: 10,
    color: 'white',
    boxShadow: 'none'
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
}))(MuiAccordionDetails);

const Contributors = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)"  marginTop="5rem">
      <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="1rem" fontSize="2rem">C<chakra.span fontSize="1.6rem" >ONTRIBUTORS</chakra.span></Text>

      <Box color="white" fontFamily="Lato" marginTop="3rem">
        <Text fontFamily="PublicoText" color="#E7B089" fontSize="1.8rem" marginBottom="2rem">T<chakra.span fontSize="1.44rem" >HE EDITORS</chakra.span></Text>
        { editors.map((editor) => (
          <div key={`${stringToSlug(editor.name)}-editor`}>
            <Accordion square expanded={expanded === `${stringToSlug(editor.name)}-editor`} onChange={handleChange(`${stringToSlug(editor.name)}-editor`)}>
              <AccordionSummary aria-controls={`${stringToSlug(editor.name)}-content`} id={`${stringToSlug(editor.name)}-header`}>
                <Typography style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Lato' }}>{editor.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{ fontSize: '0.8rem', fontFamily: 'Lato' }}>
                  {editor.bionote || 'No bionote submitted.'}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        )) }

        <Text fontFamily="PublicoText" color="#E7B089" fontSize="1.8rem" marginBottom="2rem" marginTop="2rem">T<chakra.span fontSize="1.44rem" >HE JUDGES</chakra.span></Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={5} marginBottom={10}>
          { judges.map((judge) => (
            <div key={`${stringToSlug(judge.name)}-judge`}>
              <Accordion square expanded={expanded === `${stringToSlug(judge.name)}-judge`} onChange={handleChange(`${stringToSlug(judge.name)}-judge`)}>
                <AccordionSummary aria-controls={`${stringToSlug(judge.name)}-content`} id={`${stringToSlug(judge.name)}-header`}>
                  <Typography style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Lato' }}>{judge.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.8rem', fontFamily: 'Lato' }}>
                    {judge.bionote || 'No bionote submitted.'}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )) }
        </SimpleGrid>

        <Text fontFamily="PublicoText" color="#E7B089" fontSize="1.8rem" marginBottom="2rem">T<chakra.span fontSize="1.44rem" >HE CONTRIBUTORS (WRITERS)</chakra.span></Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={5} marginBottom={10}>
          { writers.map((writer) => (
            <div key={`${stringToSlug(writer.name)}-writer`}>
              <Accordion square expanded={expanded === `${stringToSlug(writer.name)}-writer`} onChange={handleChange(`${stringToSlug(writer.name)}-writer`)}>
                <AccordionSummary aria-controls={`${stringToSlug(writer.name)}-content`} id={`${stringToSlug(writer.name)}-header`}>
                  <Typography style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Lato' }}>{writer.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.8rem', fontFamily: 'Lato' }}>
                    {writer.bionote || 'No bionote submitted.'}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )) }
        </SimpleGrid>

        <Text fontFamily="PublicoText" color="#E7B089" fontSize="1.8rem" marginBottom="2rem">T<chakra.span fontSize="1.44rem" >HE CONTRIBUTORS (ARTISTS)</chakra.span></Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={5} marginBottom={10}>
          { artists.map((artist) => (
            <div key={`${stringToSlug(artist.name)}-artist`}>
              <Accordion square expanded={expanded === `${stringToSlug(artist.name)}-artist`} onChange={handleChange(`${stringToSlug(artist.name)}-artist`)}>
                <AccordionSummary aria-controls={`${stringToSlug(artist.name)}-content`} id={`${stringToSlug(artist.name)}-header`}>
                  <Typography style={{ fontWeight: 'bold', fontSize: '1rem', fontFamily: 'Lato' }}>{artist.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography style={{ fontSize: '0.8rem', fontFamily: 'Lato' }}>
                    {artist.bionote || 'No bionote submitted.'}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          )) }
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Contributors;