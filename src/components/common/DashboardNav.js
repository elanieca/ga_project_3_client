import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { Link } from 'react-router-dom';

export default function DashboardNav() {
  return (
    <Box sx={{ '& > :not(style)': { m: 2 }, display: 'flex', justifyContent: 'center' }}>
      <Link to="/dashboard/my-library">
        <Fab variant="extended">My Library</Fab>
      </Link>
      <Link to="/dashboard/favorites">
        <Fab variant="extended">Favorites</Fab>
      </Link>
      <Link to="/dashboard/add-book">
        <Fab variant="extended">Add Book</Fab>
      </Link>
    </Box>
  );
}
