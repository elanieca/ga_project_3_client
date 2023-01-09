import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Fab from '@mui/material/Fab';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box
  // Button
} from '@mui/material';

export default function BookCard({ title, author, genre, image, id }) {
  const navigate = useNavigate();
  const navigateToBook = () => navigate(`/diary-entries/${id}`);

  return (
    <Card sx={{ width: 400, minHeight: 150 }}>
      <CardActionArea onClick={navigateToBook}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flexstart',
              alignItems: 'center'
            }}
          >
            <Fab size="small" disabled aria-label="like">
              <FavoriteIcon />
            </Fab>
          </Box>
          <Box>
            <p>Title</p>
            <Typography sx={{ mb: 1 }} color="text.primary" component="div">
              {title}
            </Typography>
            <p>Author</p>
            <Typography sx={{ mb: 1 }} color="text.primary" component="div">
              {author}
            </Typography>
            <p>Genre</p>
            <Typography color="text.primary" component="div">
              {genre}
            </Typography>
          </Box>
          <Box>
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{ maxHeight: 180, maxWidth: 100, objectFit: 'contain' }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
