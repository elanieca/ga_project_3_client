import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button
} from '@mui/material';

import FavoriteButton from './FavoriteButton';

export default function BookCard({ title, author, genre, image, id }) {
  const navigate = useNavigate();
  const navigateToBook = () => navigate(`/diary-entries/${id}`);

  return (
    <Card
      sx={{
        maxWidth: 800,
        height: 250,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 1
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flexstart',
            alignItems: 'center',
            width: '100px'
          }}
        >
          <FavoriteButton id={id} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '250px'
          }}
        >
          <Box>
            <Typography
              sx={{ mb: 1, fontWeight: 'fontWeightMedium' }}
              color="text.primary"
            >
              {title}
            </Typography>
            <Typography sx={{ mb: 1 }} color="text.secondary">
              {author}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontWeight: 'fontWeightLight' }}
            >
              {genre}
            </Typography>
          </Box>
          <Button
            size="small"
            onClick={navigateToBook}
            sx={{ ml: -0.6, textAlign: 'left', borderRadius: '4px' }}
          >
            Learn More
          </Button>
        </Box>
        <Box sx={{ height: 1 }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ minHeight: 180, maxWidth: 130 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
