import axios from 'axios';
import { AUTH } from './auth';

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const ENDPOINTS = {
  latestBooks: `${process.env.REACT_APP_BASE_URL}/api/books/latest`,
  allBooks: `${process.env.REACT_APP_BASE_URL}/api/books`,
  allGenreNames: `${process.env.REACT_APP_BASE_URL}/api/genres/names`,
  login: `${process.env.REACT_APP_BASE_URL}/api/login`,
  register: `${process.env.REACT_APP_BASE_URL}/api/register`,
  cloudinary: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
  singleBook: (id) => `${process.env.REACT_APP_BASE_URL}/api/books/${id}`,
  singleGenre: (id) => `${process.env.REACT_APP_BASE_URL}/api/genres/${id}/books`,
  search: (query) => `${process.env.REACT_APP_BASE_URL}/api/books/search?q=${query}`,
  userBooks: (id) => `${process.env.REACT_APP_BASE_URL}/api/users/${id}/books`,
  userFavoriteBooks: (id) => `${process.env.REACT_APP_BASE_URL}/api/users/${id}/favorite-books`
};

const GET = (endpoint, headers) => axios.get(endpoint, headers);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
const PUT = (endpoint, body, headers) => axios.put(endpoint, body, headers);
const DELETE = (endpoint, headers) => axios.delete(endpoint, headers);

export const API = { GET, POST, PUT, DELETE, ENDPOINTS, getHeaders };
