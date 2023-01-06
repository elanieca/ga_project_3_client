import axios from 'axios';
import { AUTH } from './auth';

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const ENDPOINTS = {
  latestBooks: '/api/books/latest',
  allBooks: '/api/books',
  allGenreNames: '/api/genres/names',
  login: '/login',
  register: 'api/register',
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
  singleBook: (id) => `/api/books/${id}`,
  singleGenre: (id) => `/api/genres/${id}/books`,
  search: (query) => `/api/books/search?q=${query}`,
  userBooks: (id) => `/api/users/${id}/books`,
  userFavoriteBooks: (id) => `/api/users/${id}/favorite-books`
};

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
