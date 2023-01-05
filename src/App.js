import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';

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
      <Route path="/card" element={<p>React App</p>} />
    </Routes>
  </Router>
);

export default App;
