import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { Container } from '@mui/system';

export default function Welcome() {
  const navigate = useNavigate();

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
