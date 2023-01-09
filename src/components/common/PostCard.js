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
  const dateAdded = [date[2].substr(0, 4), '-' + date[1], '-' + date[0]];

  return (
    <Card sx={{ height: 200, maxWidth: 550 }}>
      <CardActionArea onClick={navigateToBook} sx={{ height: 1, width: 1 }}>
        <CardContent
          sx={{
            width: 1,
            height: 1,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              mr: 2,
              width: '25%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%',
                height: 0.9
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '70%'
                }}
              >
                <Avatar />
                <Typography
                  sx={{ mt: 1, mb: 1, ml: 1 }}
                  variant="text.secondary"
                  component="div"
                >
                  {addedBy.username}
                </Typography>
              </Box>
              <Typography
                sx={{ fontWeight: 'fontWeightLight', ml: 1 }}
                variant="text.secondary"
              >
                {dateAdded}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Typography
              sx={{
                fontWeight: 'fontWeightMedium',
                fontSize: '20px',
                mb: 1,
                mr: 2,
                mt: -0.5
              }}
              color="text.primary"
              component="div"
            >
              {title}
            </Typography>
            <Typography sx={{ mb: 1, fontSize: '15px' }} color="text.secondary">
              {author}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ fontWeight: 'fontWeightLight' }}
            >
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
