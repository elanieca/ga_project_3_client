import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookCard from './components/common/BookCard';
import Login from './components/Login';
import Navbar from './components/navigation/Navbar';
import Welcome from './components/Welcome';

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

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<p>React App</p>} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/diary-entries" element={<BookCard />} />
      <Route path="*" element={<p>Oooops, this is not a valid route!</p>} />
    </Routes>
  </Router>
);

export default App;
