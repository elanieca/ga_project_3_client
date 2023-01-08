import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../lib/auth';
import { API } from '../../lib/api';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const initialFormData = {
  email: '',
  password: ''
};

const Login = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(initialFormData);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    API.POST(API.ENDPOINTS.login, formFields)
      .then(({ data: { token } }) => {
        AUTH.setToken(token);
        navigate('/');
      })
      .catch(({ response }) => {
        console.error(response);
        setError(true);
      });
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormFields({ ...formFields, [name]: value });
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
      <Box component="form" onSubmit={handleSubmit}>
        <Box>
          <TextField
            size="small"
            required={true}
            value={formFields.email}
            error={error}
            onChange={handleChange}
            type="email"
            label="Email"
            id="email"
            name="email"
            placeholder="Email"
            sx={{ mb: 2 }}
          />
        </Box>
        <Box>
          <TextField
            size="small"
            label="Password"
            type="password"
            required={true}
            value={formFields.password}
            error={error}
            onChange={handleChange}
            id="password"
            name="password"
            placeholder="Password"
          />
        </Box>
        <Button type="submit">Login</Button>
      </Box>
    </Container>
  );
};

export default Login;
