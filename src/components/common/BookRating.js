import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BookRating({ value, handleOnChange }) {
  return (
    <Box
      sx={{ ml: 0.4 }}
    >
      <Typography component="legend">Rating</Typography>
      <Rating
        name="rating"
        value={value}
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
    </Box>
  );
}
