import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  IconButton
} from '@mui/material';

import { API } from '../../lib/api';
import { AUTH } from '../../lib/auth';
import { blue } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Register() {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  });
  const [file, setFile] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) =>
    setFormFields({ ...formFields, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const imageData = new FormData();
    imageData.append('file', file);
    imageData.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    try {
      const cloudinaryResponse = await API.POST(
        API.ENDPOINTS.cloudinary,
        imageData
      );

      const apiReqBody = {
        ...formFields,
        cloudinaryImageId: cloudinaryResponse.data.public_id
      };

      await API.POST(API.ENDPOINTS.register, apiReqBody);

      const loginData = await API.POST(API.ENDPOINTS.login, {
        email: formFields.email,
        password: formFields.password
      });

      AUTH.setToken(loginData.data.token);

      navigate('/');
    } catch (e) {
      console.log(e);
      setError(true);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '50px'
      }}
    >
      <form onSubmit={handleCreateUser}>
        <div>
          <TextField
            fullWidth
            size="small"
            name="username"
            id="username"
            type="text"
            label="Username"
            required={true}
            value={formFields.username}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <TextField
            fullWidth
            size="small"
            name="email"
            id="email"
            type="email"
            label="Email"
            required={true}
            value={formFields.email}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <TextField
            fullWidth
            size="small"
            name="password"
            id="password"
            type="password"
            label="Password"
            required={true}
            value={formFields.password}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <TextField
            fullWidth
            size="small"
            name="passwordConfirmation"
            id="passwordConfirmation"
            type="password"
            label="Password Confirmation"
            required={true}
            value={formFields.passwordConfirmation}
            onChange={handleChange}
            error={error}
            sx={{ mb: 2 }}
          />
        </div>
        <div>
          <Button variant="contained" component="label">
            Upload Picture
            <input
              name="profile-picture"
              id="profile-picture"
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={handleFileChange}
            />
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            disabled
          >
            <input hidden accept="image/*" type="file" />
            {!file ? (
              <Avatar />
            ) : (
              <CheckCircleIcon fontSize="large" sx={{ color: 'green' }} />
            )}
          </IconButton>
        </div>
        <Button
          fullWidth
          sx={{ mt: 2 }}
          variant="contained"
          color="success"
          type="submit"
        >
          Create Account
        </Button>
      </form>
      <Box sx={{ mt: 2, display: 'flex' }}>
        <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
        <Link to="/login">Sign-in</Link>
      </Box>
    </Container>
  );
}
