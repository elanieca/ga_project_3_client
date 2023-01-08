import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { API } from '../lib/api';

import { Button } from '@mui/material';
import { Container } from '@mui/system';

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    API.GET(API.ENDPOINTS.allBooks)
      .then(({ data }) => console.log(data))
      .catch(({ message, response }) => console.error(message, response));
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500
      }}
    >
      <Button onClick={() => navigate('/register')}>Get started!</Button>
    </Container>
  );
}
