import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Avatar
} from '@mui/material';

export default function PostCard({
  addedBy,
  createdAt,
  title,
  author,
  genre,
  image,
  id
}) {
  const navigate = useNavigate();
  const navigateToBook = () => navigate(`/diary-entries/${id}`);
  const date = createdAt.slice(0, 10).split('-');
  const dateAdded = [date[2].substr(0,4),'-' + date[1], '-' + date[0]];

  return (
    <Card sx={{ width: 600, minHeight: 150 }}>
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
            <Avatar />
            <Typography sx={{ mb: 2 }} variant="text.secondary" component="div">
              {addedBy.username}
            </Typography>
            <Typography sx={{ mb: 2 }} variant="text.secondary" component="div">
              <p>Date added</p>
              {dateAdded}
            </Typography>
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
