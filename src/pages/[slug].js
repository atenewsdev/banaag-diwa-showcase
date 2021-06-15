import React from 'react';

import parse, { attributesToProps } from 'html-react-parser';
import {
  useParams,
  useHistory
} from "react-router-dom";
import { Box, Text, chakra, Flex, Spacer, Center, Image,Link } from '@chakra-ui/react';
import Error404 from './404';

const Entry = () => {
  const { slug, type } = useParams();
  const history = useHistory();

  let __html = null;

  try {
    __html = require(`../data/${type}/${slug}`);
  } catch (err) {
    return <Error404 />;
  }

  return (
    <chakra.div backgroundColor="#233342" padding={0} margin={0} minW="100vw" minH="100vh">
      <Box padding="3rem" marginBottom="2rem">
        <Flex>
          <Center>
            <Image src="/icon-256x256.png" alt="BD" width="2rem" marginRight="1rem" />
          </Center>
          <Center>
            <Text fontFamily="PublicoText" color="#E7B089" letterSpacing="0.3em">
              B<chakra.span fontSize="0.75rem">ANAAG</chakra.span>&nbsp;D<chakra.span fontSize="0.75rem">IWA</chakra.span>
            </Text>
          </Center>
          <Spacer />
          <Center>
            <Link fontFamily="PublicoText" color="#E7B089" letterSpacing="0.3em" onClick={() => history.goBack()}>
              &lt; B<chakra.span fontSize="0.75rem">ACK</chakra.span>
            </Link>
          </Center>
        </Flex>
      </Box>
      <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)" margin={0}>
        <Center>
          <Box color="white" fontFamily="Lato">
            <Text>
              {
                parse(__html, {
                  replace: domNode => {
                    if (domNode.attribs && domNode.name === 'header') {
                      const props = attributesToProps(domNode.attribs);
                      return (
                        <chakra.span fontFamily="PublicoText" color="#E7B089" fontSize="1.6rem" {...props}>
                          {domNode.children.map((child) => child.data)}
                        </chakra.span>
                      );
                    }
                  }
                })
              }
            </Text>
          </Box>
        </Center>
      </Box>
      
      <Box w="100%" h="20vh" />
    </chakra.div>
  )
}

export default Entry;