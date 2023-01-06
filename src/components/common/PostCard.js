import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea
} from '@mui/material';

export default function PostCard({ title, author, genre, image, id }) {
  const navigate = useNavigate();
  const navigateToBook = () => navigate(`/diary-entries/${id}`);

  return (
    <Card sx={{ maxWidth: 500, height: 150 }}>
      <CardActionArea onClick={navigateToBook}>
        <CardContent>
          <Typography gutterBottom variant="text.secondary" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="text.secondary" component="div">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {genre}
          </Typography>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ maxHeight: 345, objectFit: 'contain' }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
