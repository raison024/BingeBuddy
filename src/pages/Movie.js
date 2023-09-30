import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import '../App.css';
import SearchIcon from '../components/search.svg';
import Navbar from "../components/Navbar";

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=b059fc30';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}&type=movie`);
    const data = response.json();
    console.log(data)
    data.then((res) => {
      setMovies(res.Search);
    });
  }

  useEffect(() => {
    searchMovies('');
  }, []);

  return (
    <div className='app'>
      <Navbar />
      {/* <h1>MovieQuest</h1> */}

      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='SearchIcon'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0 ?
          (
            <div className='container'>
              {
                movies.map((movie) => (<MovieCard movie={movie} key={movie.imdbID} />))
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies found</h2>
            </div>
          )
      }

    </div>
  );
}

export default Movie;