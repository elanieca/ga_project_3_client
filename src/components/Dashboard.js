import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import DashboardNav from './common/DashboardNav';
import { Container, Grid, Typography, Box, Button } from '@mui/material';

// import BookCard from './common/BookCard';

const MyLibrary = ({ searchedBooks }) => {
  const [books, setBooks] = useState(searchedBooks);

  useEffect(() => {
    API.GET(API.ENDPOINTS.userBooks)
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
      <DashboardNav />
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
        ></Box>
        <Grid
          sx={{
            flexDirection: 'column',
            justifyContents: 'center',
            alignItems: 'center'
          }}
        >
          {/* {books?.map((book) => (
            <Grid sx={{ mb: 2 }} item xs={4} key={book._id}> */}
          {/* <BookCard
                title={book.title}
                author={book.author}
                genre={book.genre}
                image={book.image}
                id={book._id}
                alt={book.title}
              /> */}
          {/* </Grid>
          ))} */}
        </Grid>
      </Container>
    </>
  );
};

export default MyLibrary;
