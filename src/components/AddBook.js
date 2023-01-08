import { useEffect, useState } from 'react';
import {
  TextField,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Typography
} from '@mui/material';
import { API } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import BookRating from './common/BookRating';
import DashboardNav from './common/DashboardNav';

export default function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    image: '',
    timeRead: '',
    rating: '',
    diaryEntry: ''
  });
  const [error, setError] = useState(false);
  const [availableGenres, setAvailableGenres] = useState([]);
  useEffect(() => {
    API.GET(API.ENDPOINTS.allGenreNames)
      .then(({ data }) => setAvailableGenres(data))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const rating = parseInt(formData.rating);
    const newFormData = { ...formData, rating: rating };

    API.POST(API.ENDPOINTS.allBooks, newFormData, API.getHeaders())
      .then(({ data }) => {
        navigate(`/diary-entries/${data._id}`);
      })
      .catch((e) => {
        if (e.status === 301) {
          setError(true);
        }
        console.log(e);
      });
  };

  return (
    <>
      <DashboardNav />
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              size="small"
              type="text"
              value={formData.title}
              onChange={handleChange}
              error={error}
              label="Title"
              name="title"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              size="small"
              type="text"
              value={formData.author}
              onChange={handleChange}
              error={error}
              label="Author"
              name="author"
            />
          </Box>
          <Box>
            <FormControl size="small" sx={{ mb: 2, width: '50%' }}>
              <InputLabel value="genre" id="genre">
                Genre
              </InputLabel>
              <Select
                required
                labelId="genre"
                onChange={handleChange}
                label="Genre"
                name="genre"
              >
                {availableGenres.map((genre) => (
                  <MenuItem name="genre" key={genre._id} value={genre.name}>
                    {genre.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              fullWidth
              size="small"
              type="text"
              value={formData.image}
              onChange={handleChange}
              error={error}
              label="Book Cover"
              name="image"
              placeholder="Paste link here"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              required
              size="small"
              type="text"
              value={formData.timeRead}
              name="timeRead"
              onChange={handleChange}
              error={error}
              label="Time Read"
              placeholder="2 weeks, 1 month etc..."
            />
          </Box>
          <Box>
            <BookRating
              value={formData.rating}
              handleOnChange={handleChange}
            />
          </Box>
          <Box>
            <TextareaAutosize
              name="diaryEntry"
              value={formData.diaryEntry}
              onChange={handleChange}
              placeholder="Leave your review"
              label="Review"
              minRows={10}
              style={{ width: 500 }}
            />
          </Box>
          <Button variant="contained" type="submit">
            ADD NEW BOOK
          </Button>
        </form>
      </Container>
    </>
  );
}
