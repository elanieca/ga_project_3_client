import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function BookRating({ rating, setRating }) {
  return (
    <Stack sx={{ mb: 2 }} spacing={1}>
      <Rating
        rating={rating}
        changeRating={setRating}
        name="rating"
        defaultValue={0}
        size="large"
      />
    </Stack>
  );
}
