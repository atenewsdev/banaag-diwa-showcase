import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Text, Center, VStack } from '@chakra-ui/react';

import { CDN_URL } from '../../utils/constants';

const awards = {
  honorable: `${CDN_URL}/2021/06/honorable-mention-laurel.png`,
  first: `${CDN_URL}/2021/06/1st-place-laurel.png`,
  second: `${CDN_URL}/2021/06/2nd-place-laurel.png`,
  special: `${CDN_URL}/2021/06/special-prize-laurel.png`
}

export default function MediaCard({ src, title, author, href, award, titleSrc, maxWidth, onClick, style }) {
  if (src) {
    return (
      <Card style={{ position: 'relative', backgroundColor: '#233342', borderColor: '#E7B089', height: 400, ...style }}>
        <CardActionArea href={href} onClick={onClick} style={{ height: '100%' }}>
          { award ? (
            <img src={awards[award]} alt="Award" style={{
              position: 'absolute',
              left: '1rem',
              top: '1rem',
              maxWidth: maxWidth ?? 'clamp(15rem, 20vw, 20rem)',
              zIndex: 1
            }} />
          ) : null }
          { titleSrc ? (
            <img src={titleSrc} alt="Title" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: maxWidth ?? 'clamp(10rem, 15vw, 15rem)',
              zIndex: 1
            }} />
          ) : null }
          <div style={{ backgroundColor: 'black', height: '100%' }}>
            <CardMedia
              style={{
                height: '100%',
                opacity: 0.5
              }}
              image={src}
              title={title}
            />
          </div>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card style={{ position: 'relative', backgroundColor: '#233342', borderColor: '#E7B089', ...style }} variant="outlined">
      <CardActionArea href={href} onClick={onClick}>
        <CardContent style={{ height: 200, width: '100%' }}>
          <Center h="100%">
            <VStack>
              <Text color="white" fontFamily="Lato" fontWeight="bold" fontSize="1rem" textAlign="center">{title}</Text>
              <Text color="#E7B089" fontFamily="Lato" fontStyle="italic" fontSize="0.8rem" textAlign="center">{author}</Text>
            </VStack>
          </Center>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}