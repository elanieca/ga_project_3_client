import { useEffect, useState } from 'react';
import { API } from '../lib/api';

import { Container, Grid } from '@mui/material';

import PostCard from './common/PostCard';

const LatestPosts = ({ searchedBooks }) => {
  const [books, setBooks] = useState(searchedBooks);

  useEffect(() => {
    API.GET(API.ENDPOINTS.latestBooks)
      .then(({ data }) => {
        setBooks(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  useEffect(() => {
    setBooks({ searchedBooks });
  }, [searchedBooks]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
        {books?.map((book) => (
          <Grid item xs={4} key={book._id}>
            <PostCard
              title={book.title}
              author={book.author}
              genre={book.genre}
              image={book.image}
              id={book._id}
              alt={book.title}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestPosts;
