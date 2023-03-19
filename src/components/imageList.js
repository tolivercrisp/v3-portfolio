// React
import * as React from 'react';
import { Link } from 'react-router-dom';
// Material UI
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
// images
import DreamImg from '../assets/dreamAI-pic.jpg';
import BuzzImg from '../assets//buzzbytes-pic.jpg';
import BountyImg from '../assets/bounty-pic.jpeg';
import NoteImg from '../assets//notes-pic.jpg';

const images = [
  {
    url: DreamImg,
    title: 'Bounty Hunter',
    link: 'https://github.com/mitchell4563/sith-happens',
  },
  {
    url: BuzzImg,
    title: 'BuzzBytes Social Media',
    link: 'https://github.com/tolivercrisp/BuzzBytes',
  },
  {
    url: BountyImg,
    title: 'AI Story Generator',
    link: 'https://github.com/iskry/TalesfromtheAlgorithm',
  },
  {
    url: NoteImg,
    title: 'Note-Taker',
    link: 'https://github.com/tolivercrisp/toliver-note-taker',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '21.75vh',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: '21.75vh',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.7,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.9,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function imageList() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component={Link}
              to={image.link}
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}