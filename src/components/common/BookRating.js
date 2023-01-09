import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BookRating({ rating, setRating }) {
  const [ratingValue, setRatingValue] = useState(parseInt(rating));

  useEffect(() => {
    setRatingValue(parseInt(rating));
  }, [rating]);

  return (
    <Box sx={{ ml: 0.4 }}>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="rating"
        value={ratingValue}
        onChange={({ target: { value } }) => setRating(value)}
      />
    </Box>
  );
}
