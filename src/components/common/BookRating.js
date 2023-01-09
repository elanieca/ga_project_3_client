import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BookRating({ rating, setRating, isDisabled }) {
  return (
    <Box sx={{ ml: 0.4 }}>
      <Typography component="legend">Rating</Typography>
      <Rating
        typeof="number"
        name="rating"
        rating={rating}
        onChange={({ target: { value } }) => setRating(value)}
        readOnly
      />
    </Box>
  );
}
