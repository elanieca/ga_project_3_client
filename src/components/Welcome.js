import { useNavigate } from 'react-router-dom';
// import { image } from '../assets/book-background.png';
// import { useEffect } from 'react';
// import { API } from '../lib/api';

import { Button, Box } from '@mui/material';
import { Container } from '@mui/system';

export default function Welcome() {
  const navigate = useNavigate();
  const image = require('../assets/book-background.png');

  return (
    <Container
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        // width: '100vw',
        // height: '100vh'
        // minHeight: '100vh',
        // minWidth: '100vh'
      }}
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        // height: 500
      }}
    >
      <Box>
        <h1> WELCOME </h1>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/register')}
      >
        Get started
      </Button>
      {/* <h1>Welcome to your book library</h1> */}
      {/* <p>A hub to store all your favourite reads</p> */}
    </Container>
  );
}
