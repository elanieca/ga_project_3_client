import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/navigation/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from './styles/theme';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Welcome from './components/Welcome';
import LatestPosts from './components/LatestPosts';
import AddBook from './components/AddBook';
import BookIndex from './components/BookIndex';
import MyLibrary from './components/Dashboard';
import Favorites from './components/Favorites';

window.Buffer = window.Buffer || require('buffer').Buffer;

// Navigation -> Navbar, NavDrawer, Avatar
// "/" -> LatestPosts -> PostCard
// "/welcome" -> Welcome
// "/register" -> Register
// "/login" -> Login
// "/diary-entries" -> DiaryIndex -> BookCard
// "/diary-entries/:id" -> BookShow
// "/dashboard/my-library" -> Dashboard -> UserBooks
// "/dashboard/favourites" -> Dashboard -> FavoriteBooks
// "/dashboard/add-book" -> Dashboard -> AddBook

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () => createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light')),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/dashboard/favorites" element={<Favorites />} />
          <Route path="/dashboard/my-library" element={<MyLibrary />} />
          <Route path="/dashboard/add-book" element={<AddBook />} />
          <Route path="/diary-entries" element={<BookIndex />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={<LatestPosts />} />
          <Route path="*" element={<p>Oooops, this is not a valid route!</p>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
