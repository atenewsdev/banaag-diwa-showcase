import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const awards = {
  honorable: '/assets/rosettes/honorable mention rosette chip.png',
  first: '/assets/rosettes/1st place rosette chip.png',
  second: '/assets/rosettes/2nd place rosette chip.png',
  special: '/assets/rosettes/special prize rosette chip.png'
}

export default function MediaCard({ src, title, href, award, titleSrc, maxWidth, onClick }) {
  return (
    <Card style={{ position: 'relative' }}>
      <CardActionArea href={href} onClick={onClick}>
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
        <div style={{ backgroundColor: 'black' }}>
          <CardMedia
            style={{
              height: 400,
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