import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

window.Buffer = window.Buffer || require('buffer').Buffer;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<p>React App</p>} />
    </Routes>
  </Router>
);

export default App;
