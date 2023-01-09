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
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2) ), url(${image})`,
        backgroundSize: 'cover',
        minWidth: '100vw',
        minHeight: '100vh',
        textAlign: 'center',
        mt: -5
      }}
    >
      <Box>
        <h1>WELCOME</h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/register')}
          sx={{ mt: 2 }}
        >
          Get started
        </Button>
      </Box>
      {/* <h1>Welcome to your book library</h1> */}
      {/* <p>A hub to store all your favourite reads</p> */}
    </Container>
  );
}
