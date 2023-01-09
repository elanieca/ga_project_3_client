import { useEffect, useState } from 'react';
import { API } from '../lib/api';

import { Container, Grid, Typography, Box, Button } from '@mui/material';

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
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContents: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            justifyContents: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography sx={{ mb: 2 }} variant="h5">
            Latest posts from users you follow:
          </Typography>
          <Button onClick={searchedBooks} variant="contained" color="primary">
            Refresh
          </Button>
        </Box>
        <Grid
          sx={{
            flexDirection: 'column',
            justifyContents: 'center',
            alignItems: 'center'
          }}
        >
          {books?.map((book) => (
            <Grid sx={{ mb: 2 }} item xs={4} key={book._id}>
              <PostCard
                addedBy={book.addedBy}
                createdAt={book.createdAt}
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
    </>
  );
};

export default LatestPosts;
