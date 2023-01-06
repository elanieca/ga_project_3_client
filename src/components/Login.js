import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../lib/api';
import { NOTIFY } from '../lib/notifications';
import { AUTH } from '../lib/auth';
import { useAuthenticated } from '../hooks/useAuthenticated';

import { TextField, Button } from '@mui/material';
import { Container } from '@mui/system';

export default function Login() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({ email: false, password: false });
  const [isLoggedIn] = useAuthenticated();

  if (isLoggedIn) {
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.login, formFields)
      .then(({ data }) => {
        NOTIFY.SUCCESS(data.message);
        AUTH.setToken(data.token);
        navigate('/');
      })
      .catch((e) => {
        console.log(e);
        if (e.response.data.message === 'Unauthorized') {
          setError({ ...error, password: true });
        } else {
          setError({ email: true, password: true });
        }
      });
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

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
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            size="small"
            name="email"
            id="email"
            type="email"
            label="Email"
            placeholder="Email"
            required={true}
            value={formFields.email}
            onChange={handleChange}
            error={error.email}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <TextField
            size="small"
            name="password"
            id="password"
            required={true}
            type="password"
            label="Password"
            placeholder="password"
            value={formFields.password}
            onChange={handleChange}
            variant="outlined"
            error={error.password}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
}
