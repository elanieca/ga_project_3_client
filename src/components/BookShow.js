import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API } from '../lib/api';
import BookRating from './common/BookRating';
// import { useAuthenticated } from '../hooks/useAuthenticated';
// import { AUTH } from '../lib/auth';

import {
  Container,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';

import '../styles/theme.js';

const BookShow = () => {
  // const [isLoggedIn] = useAuthenticated();
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleBook, setSingleBook] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    API.GET(API.ENDPOINTS.singleBook(id))
      .then(({ data }) => {
        setSingleBook(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
    setIsUpdated(false);
  }, [id, isUpdated]);

  const goToIndex = () => navigate('/diary-entries');
  const goToLatest = () => navigate('/');

  // const userHasReviewed = useMemo(() => {
  //   return singleBook?.reviews
  //     .map((review) => review.reviewer._id)
  //     .some((id) => AUTH.isOwner(id));
  // }, [singleBook]);

  return (
    <>
      <Container maxWidth="lg" sx={{ display: 'flex' }} className="BookShow">
        <Box>
          <img
            style={{ width: 300, height: 421 }}
            src={singleBook?.image}
            alt={singleBook?.title}
          />
        </Box>
        <Box>
          <CardContent>
            <Typography variant="h5" component="p">
              {singleBook?.title}
            </Typography>
            <Typography variant="h5" component="p">
              by {singleBook?.author}
            </Typography>
            <Typography color="text.secondary">{singleBook?.genre}</Typography>
            <Typography color="text.secondary">
              Added by {singleBook?.addedBy.username}
            </Typography>
            <BookRating rating={singleBook?.rating} />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={goToIndex}>
              BACK TO LIBRARY
            </Button>
            <Button size="small" onClick={goToLatest}>
              BACK TO LATEST POSTS
            </Button>
          </CardActions>
        </Box>
      </Container>
      <Container>
        <Typography className="reader_review" color="text.secondary">
          READER REVIEW
        </Typography>
        <Typography color="text.secondary">
          Read Time: {singleBook?.timeRead}
        </Typography>
        <Typography className="review" variant="h5" component="p">
          {singleBook?.diaryEntry}
        </Typography>
      </Container>
    </>
  );
};

export default BookShow;
