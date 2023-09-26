import * as ReactDOM from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from "./pages/Movie";
import Anime from "./pages/Anime";
import Show from "./pages/Show";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './Theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/anime" element={<Anime/>} />
        <Route path="/shows" element={<Show/>} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
