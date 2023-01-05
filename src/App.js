import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';

window.Buffer = window.Buffer || require('buffer').Buffer;

// Navigation -> Navbar, NavDrawer, Avatar
// "/welcome" -> Welcome
// "/register" -> Register
// "/login" -> Login
// "/" -> LatestPosts -> PostCard
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
    </Routes>
  </Router>
);

export default App;
