import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/navigation/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from './styles/theme';
import Login from './components/auth/Login';

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
          <Route path="/" element={<p>Activity feed</p>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Oooops, this is not a valid route!</p>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
