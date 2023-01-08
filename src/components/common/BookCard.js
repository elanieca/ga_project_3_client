import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea
} from '@mui/material';

export default function BookCard({ title, image, author, genre, id }) {
  const navigate = useNavigate();
  const navigateToBookShow = () => navigate('/diary-entries');

  return (
    <Grid container>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardActionArea onClick={navigateToBookShow}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ maxHeight: 345, objectFit: 'contain' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {genre}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardActionArea onClick={navigateToBookShow}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ maxHeight: 345, objectFit: 'contain' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {genre}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, height: 400 }}>
        <CardActionArea onClick={navigateToBookShow}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ maxHeight: 345, objectFit: 'contain' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {genre}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
