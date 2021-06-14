import React from 'react';

import parse, { attributesToProps } from 'html-react-parser';
import {
  useParams
} from "react-router-dom";
import { Box, Text, chakra, Flex, Center, Image } from '@chakra-ui/react';

const Entry = () => {
  const { slug, type } = useParams();
  let __html = null;

  React.useEffect(() => {
    if (__html !== null) {
      console.log(__html);
    }
  }, [__html]);

  try {
    __html = require(`../data/${type}/${slug}`);
  } catch (err) {
    return (
      <chakra.div backgroundColor="#233342" padding={0} margin={0} minW="100vw" minH="100vh">
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
        <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)" margin={0}>
          <Center h="100%">
            <Box color="white" fontFamily="Lato" marginTop="3rem">
              <Text textAlign="center">
                <chakra.span fontFamily="PublicoText" color="#E7B089" fontSize="1.6rem">
                  <chakra.span color="#fff">Error 404!</chakra.span><br />Page not found!
                </chakra.span>
              </Text>
            </Box>
          </Center>
        </Box>
      </chakra.div>
    )
  }

  return (
    <chakra.div backgroundColor="#233342" padding={0} margin={0} minW="100vw" minH="100vh">
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
      <Box w="100%" paddingLeft="clamp(3rem, 8vw, 10rem)" paddingRight="clamp(3rem, 8vw, 10rem)" margin={0}>
        <Center>
          <Box color="white" fontFamily="Lato" marginTop="3rem">
            <Text>
              {
                parse(__html, {
                  replace: domNode => {
                    if (domNode.attribs && domNode.name === 'b') {
                      const props = attributesToProps(domNode.attribs);
                      console.log(domNode.children);
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