import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/navigation/Navbar';
import Register from './components/auth/Register';
import Welcome from './components/Welcome';
import LatestPosts from './components/LatestPosts';
import AddBook from './components/AddBook';
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

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/dashboard/favorites" element={<Favorites />} /> 
      <Route path="/dashboard/my-library" element={<MyLibrary />} /> 
      <Route path="/dashboard/add-book" element={<AddBook />} />
      <Route path="/LatestPosts" element={<LatestPosts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<p>React App</p>} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<p>Oooops, this is not a valid route!</p>} />
    </Routes>
  </Router>
);

export default App;
