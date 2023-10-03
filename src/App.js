import * as ReactDOM from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from "./pages/Movie";
import Anime from "./pages/Anime";
import Show from "./pages/Show";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/shows" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
